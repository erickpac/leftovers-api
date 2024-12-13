import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";

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
