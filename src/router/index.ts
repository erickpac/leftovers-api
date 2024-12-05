import { Application, Router } from "express";
import { StoresRouter, UsersRouter, AuthRouter } from "@/components";
import * as middleware from "@/middlewares";

type Route = [string, Router];
const protectedRoutes: Route[] = [
  ["stores", StoresRouter],
  ["users", UsersRouter],
];

const publicRoutes: Route[] = [
  ["auth", AuthRouter],
];

/**
 * Sets up the application routes.
 *
 * This function initializes a new router, mounts it on the `/api/v1` path,
 * and iterates over the `routes` array to register each route with the router.
 *
 * @param {Application} app - The Express application instance.
 */
const setRoutes = (app: Application) => {
  const router = Router();

  app.use("/api/v1", router);

  publicRoutes.forEach(([path, route]) => {
    router.use(`/${path}`, route);
  });

  protectedRoutes.forEach(([path, route]) => {
    router.use(`/${path}`, middleware.authenticate, route);
  });
};

export default setRoutes;
