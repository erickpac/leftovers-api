import { Application, Router } from "express";
import { ServerStatusRouter, StoresRouter } from "../components";

type Route = [string, Router];
const routes: Route[] = [
  ["server-status", ServerStatusRouter],
  ["stores", StoresRouter],
];

const setRoutes = (app: Application) => {
  const router = Router();

  app.use("/api/v1", router);

  routes.forEach(([path, route]) => {
    router.use(`/${path}`, route);
  });
};

export default setRoutes;
