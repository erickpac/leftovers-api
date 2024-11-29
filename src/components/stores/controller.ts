import type { Request, Response } from "express";
import * as service from "./service";
import { sendSuccessResponse, sendErrorResponse } from "@/common/responses";

export const getStores = async (req: Request, res: Response) => {
  try {
    const stores = await service.getAllStores();

    sendSuccessResponse({ res, data: stores });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    sendErrorResponse({ res, message });
  }
};
