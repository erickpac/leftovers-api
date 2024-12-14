import { ZodError } from "zod";
import { NODE_ENV } from "./config";
import { ErrorObject } from "@/types/error-object";
import { CustomError } from "@/common/custom/custom-error";

export const normalizeError = (error: unknown): ErrorObject => {
  if (error instanceof ZodError) {
    return {
      message: error.format()._errors.join(", "),
      statusCode: 400,
    };
  }

  if (error instanceof CustomError) {
    return {
      message: error.message,
      statusCode: error.statusCode,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      statusCode: 500,
      stack: NODE_ENV === "production" ? undefined : error.stack,
    };
  }

  return {
    message: "An unknown error occurred",
    statusCode: 500,
  };
};
