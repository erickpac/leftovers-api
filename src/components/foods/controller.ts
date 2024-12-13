import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await service.getFoodById(Number(id));

    sendSuccessResponse({ res, data: item });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    sendErrorResponse({ res, message });
  }
};
