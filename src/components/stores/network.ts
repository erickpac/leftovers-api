import { Router } from "express";
import * as Controller from "./controller";

export const StoresRouter = Router();

StoresRouter.get("/", Controller.getStores);
