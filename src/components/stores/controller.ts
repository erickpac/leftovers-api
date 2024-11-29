import type { Request, Response } from "express";
import { getAllStores } from "./service";
import { sendSuccessResponse, sendErrorResponse } from "@/common/responses";

export const getStores = async (req: Request, res: Response) => {
  try {
    const stores = await getAllStores();

    sendSuccessResponse({ res, data: stores });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    sendErrorResponse({ res, message });
  }
};
