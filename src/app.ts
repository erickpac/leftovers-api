import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import setRoutes from "./router";
import * as middleware from "./middlewares";

const app: Application = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

setRoutes(app);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
