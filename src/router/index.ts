import { Application, Router } from "express";
import { router as UsersRouter } from "@/components/users/network";
import { router as StoresRouter } from "@/components/stores/network";
import { router as FoodsRouter } from "@/components/foods/network";
import * as middleware from "@/middlewares";

type Route = [string, Router];
const routes: Route[] = [
  ["stores", StoresRouter],
  ["users", UsersRouter],
  ["foods", FoodsRouter],
];

/**
 * Sets up the application routes.
 *
 * This function initializes a new router, mounts it on the `/api/v1` path,
 * and iterates over the `routes` array to register each route with the router.
 *
 * @param {Application} app - The Express application instance.
 */
export const setRoutes = (app: Application) => {
  const router = Router();

  app.use("/api/v1", router);
  app.use(middleware.notFound);
  app.use(middleware.errorHandler);

  routes.forEach(([path, route]) => {
    router.use(`/${path}`, route);
  });
};
