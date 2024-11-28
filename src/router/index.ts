import { Application, Router } from "express";
import { StoresRouter, UsersRouter } from "@/components";

type Route = [string, Router];
const routes: Route[] = [
  ["stores", StoresRouter],
  ["users", UsersRouter],
];

const setRoutes = (app: Application) => {
  const router = Router();

  app.use("/api/v1", router);

  routes.forEach(([path, route]) => {
    router.use(`/${path}`, route);
  });
};

export default setRoutes;
