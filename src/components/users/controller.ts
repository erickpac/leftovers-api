import type { Request, Response } from "express";
import { getAllUsers } from "@/components/users/service";
import { sendSuccessResponse, sendErrorResponse } from "@/common/responses";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();

    sendSuccessResponse({ res, data: users });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    sendErrorResponse({ res, message });
  }
};
