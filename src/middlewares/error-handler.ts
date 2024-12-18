import type { NextFunction, Request, Response } from "express";
import { sendErrorResponse } from "@/common/responses/error";
import { normalizeError } from "@/utils/normalize-error";

/**
 * Middleware to handle errors in the application.
 *
 * @param error - The error object.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 *
 * @remarks
 * This middleware captures any errors that occur during the request-response cycle.
 * It normalizes the error and sends a structured error response.
 * In production mode, the error stack trace is omitted from the response.
 *
 * @example
 * app.use(errorHandler);
 */
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { message, statusCode, errors, stack } = normalizeError(error);

  return sendErrorResponse({ res, message, statusCode, errors, stack });
};
