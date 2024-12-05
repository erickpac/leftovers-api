import { Router } from "express";
import * as Controller from "./controller";

const router = Router();

router.post("/login", Controller.loginUser);
router.post("/register", Controller.registerUser);

export default router;