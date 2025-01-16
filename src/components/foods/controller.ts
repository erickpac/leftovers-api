import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";
import { normalizeError } from "@/lib/normalize-error";
import { CustomError } from "@/common/custom/error";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const parsedId = Number(id);

    if (isNaN(parsedId)) {
      throw new CustomError("Invalid food ID format", 400);
    }

    const foodItem = await service.getFoodById(parsedId);

    return sendSuccessResponse({ res, data: foodItem });
  } catch (error) {
    const { message, statusCode } = normalizeError(error);

    return sendErrorResponse({ res, message, statusCode });
  }
};
