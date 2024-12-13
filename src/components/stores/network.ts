import { Router } from "express";
import * as Controller from "./controller";

export const router = Router();

router.get("/", Controller.getStores);
