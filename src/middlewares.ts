import type { NextFunction, Request, Response } from "express";

import ErrorResponse from "@/types/error-response";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`🔍 - not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction,
) => {
  const statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};
