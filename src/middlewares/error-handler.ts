import type { NextFunction, Request, Response } from "express";
import { sendErrorResponse } from "@/common/responses/error";
import { normalizeError } from "@/utils/normalize-error";

/**
 * Middleware to handle errors in the application.
 *
 * @param err - The error object.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 *
 * @remarks
 * This middleware captures any errors that occur during the request-response cycle.
 * It sets the response status code to 500 if it hasn't been set or if it is 200.
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
  const { message, statusCode, stack } = normalizeError(error);

  return sendErrorResponse({ res, message, statusCode, stack });
};
