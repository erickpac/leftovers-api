import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";
import { normalizeError } from "@/utils/normalize-error";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const parsedId = Number(id);

    if (isNaN(parsedId)) {
      return sendErrorResponse({
        res,
        message: "Invalid food ID format",
        statusCode: 400,
      });
    }

    const foodItem = await service.getFoodById(parsedId);

    if (!foodItem) {
      return sendErrorResponse({
        res,
        message: "Food item not found",
        statusCode: 404,
      });
    }

    return sendSuccessResponse({ res, data: foodItem });
  } catch (error) {
    const { message, statusCode } = normalizeError(error);

    return sendErrorResponse({ res, message, statusCode });
  }
};
