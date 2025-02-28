import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";
import { handleError } from "@/lib/error-handler";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await service.getUsers();

    sendSuccessResponse({ res, data: users });
  } catch (error) {
    const { message, statusCode } = handleError(error);

    return sendErrorResponse({ res, message, statusCode });
  }
};
