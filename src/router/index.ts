import { Application, Router } from "express";
import { ServerStatusRouter } from "../components";

const routes = [["server-status", ServerStatusRouter]];

const setRoutes = (app: Application) => {
  const router = Router();

  app.use("/api/v1", router);

  routes.forEach(([path, route]) => {
    router.use(`/${path}`, route as Router);
  });
};

export default setRoutes;
