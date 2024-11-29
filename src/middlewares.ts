import type { NextFunction, Request, Response } from "express";
import { sendErrorResponse } from "@/common/responses";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`🔍 - not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  const stack = process.env.NODE_ENV === "production" ? undefined : err.stack;

  sendErrorResponse({ res, statusCode, message: err.message, stack });
};
