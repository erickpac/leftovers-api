import ErrorResponse from "@/types/error-response";
import type { Response } from "express";

const error = ({
  res,
  statusCode = 500,
  message,
  stack = undefined,
}: ErrorResponse): Response => {
  return res.status(statusCode).json({ error: message, stack });
};

export default error;
