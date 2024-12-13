import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";
import { normalizeError } from "@/utils/normalize-error";
import { z } from "zod";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validId = z
      .number({
        message: "Invalid food ID format",
      })
      .parse(Number(id));

    const foodItem = await service.getFoodById(validId);

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
