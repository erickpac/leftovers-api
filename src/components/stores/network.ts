import { Router } from "express";
import * as Controller from "./controller";

const router = Router();

router.get("/", Controller.getStores);

export default router;
