import type { NextFunction, Request, Response } from "express";
import { CustomError } from "@/common/custom/error";

/**
 * Middleware to handle requests to routes that are not found.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 *
 * @remarks
 * This middleware creates an error with a message indicating the requested URL
 * was not found and sets the response status to 404. It then passes the error
 * to the next middleware in the stack.
 *
 * @example
 * app.use(notFound);
 */
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError(`🔍 - not found - ${req.originalUrl}`, 404);

  next(error);
};
