import { Router } from "express";
import * as Controller from "./controller";

export const UsersRouter = Router();

UsersRouter.get("/", Controller.getUsers);
