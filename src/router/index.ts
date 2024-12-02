import { Application, Router } from "express";
import { StoresRouter, UsersRouter } from "@/components";

type Route = [string, Router];
const routes: Route[] = [
  ["stores", StoresRouter],
  ["users", UsersRouter],
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

  routes.forEach(([path, route]) => {
    router.use(`/${path}`, route);
  });
};

export default setRoutes;
