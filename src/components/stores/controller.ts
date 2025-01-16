import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";

export const getStores = async (req: Request, res: Response) => {
  try {
    const stores = await service.getStores();

    sendSuccessResponse({ res, data: stores });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    sendErrorResponse({ res, message });
  }
};
