import type { Request, Response } from "express";
import * as service from "./service";
import { sendSuccessResponse, sendErrorResponse } from "@/common/responses";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await service.getAllUsers();

    sendSuccessResponse({ res, data: users });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    sendErrorResponse({ res, message });
  }
};
