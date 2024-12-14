import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";
import { normalizeError } from "@/utils/normalize-error";
import { z } from "zod";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const idSchema = z.object({
      id: z.string().transform((val) => Number(val)),
    });

    const { id } = idSchema.parse(req.params);

    const foodItem = await service.getFoodById(id);

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
