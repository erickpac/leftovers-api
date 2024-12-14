import type { NextFunction, Request, Response } from "express";
import { sendErrorResponse } from "@/common/responses/error";
import { ZodSchema } from "zod";
import { normalizeError } from "./utils/normalize-error";

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
  const error = new Error(`🔍 - not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

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
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { message, statusCode, stack } = normalizeError(err);

  return sendErrorResponse({ res, message, statusCode, stack });
};

/**
 * Middleware factory that validates request body against a Zod schema.
 *
 * @param schema - The Zod schema to validate against
 * @returns Express middleware function
 *
 * @example
 * app.post('/users', validateBody(userSchema), createUser);
 */
export const validateBody =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body);
      // Attach validated data to request for use in subsequent middlewares
      req.body = validatedData;
      next();
    } catch (error) {
      const { message, statusCode, stack } = normalizeError(error);

      return sendErrorResponse({ res, message, statusCode, stack });
    }
  };
