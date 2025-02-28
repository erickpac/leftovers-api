import type { Request, Response } from "express";
import * as service from "./service";
import { sendErrorResponse } from "@/common/responses/error";
import { sendSuccessResponse } from "@/common/responses/success";
import { handleError } from "@/lib/error-handler";
import { parseAndValidateId } from "@/lib/utils";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const parsedId = parseAndValidateId(req.params.id);
    const foodItem = await service.getFoodById(parsedId);

    return sendSuccessResponse({ res, data: foodItem });
  } catch (error) {
    const { message, statusCode } = handleError(error);

    return sendErrorResponse({ res, message, statusCode });
  }
};
