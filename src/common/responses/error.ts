import ErrorResponse from "@/types/error-response";
import type { Response } from "express";

export const error = ({
  res,
  status = 500,
  message,
}: ErrorResponse): Response => {
  return res.status(status).json({ error: message });
};
