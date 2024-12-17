import { Application, Router } from "express";
import { router as UsersRouter } from "@/components/users/network";
import { router as StoresRouter } from "@/components/stores/network";
import { router as FoodsRouter } from "@/components/foods/network";
import { notFound } from "@/middlewares/not-found";
import { errorHandler } from "@/middlewares/error-handler";

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
  app.use(notFound);
  app.use(errorHandler);

  routes.forEach(([path, route]) => {
    router.use(`/${path}`, route);
  });
};
