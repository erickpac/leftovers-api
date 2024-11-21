import { Application, Router, Request, Response, NextFunction } from "express";
import { ServerStatusRouter } from "../components";

type Route = [string, Router];
const routes: Route[] = [["server-status", ServerStatusRouter]];

const setRoutes = (app: Application) => {
  const router = Router();

  app.use("/api/v1", router);

  routes.forEach(([path, route]) => {
    router.use(`/${path}`, route);
  });

  // Handle unknown routes
  app.use((req: Request, res: Response) => {
    res.status(404).json({ message: "Route not found" });
  });

  // Error handling middleware
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
    next(err);
  });
};

export default setRoutes;
