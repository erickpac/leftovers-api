import { ErrorResponse } from "@/types/error-response";
import type { Response } from "express";

/**
 * Sends an error response with the specified status code, message, and optional stack trace.
 *
 * @param res - The response object.
 * @param statusCode - The HTTP status code for the error response (default is 500).
 * @param message - The error message to be included in the response.
 * @param errors - The optional array of error details to be included in the response.
 * @param stack - The optional stack trace to be included in the response.
 * @returns The response object with the error details.
 */
export const sendErrorResponse = ({
  res,
  statusCode = 500,
  message,
  errors = undefined,
  stack,
}: ErrorResponse): Response => {
  return res.status(statusCode).json({ message, errors, stack });
};
