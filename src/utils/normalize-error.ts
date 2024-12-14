import { ZodError } from "zod";

export const normalizeError = (
  error: unknown,
): { message: string; statusCode: number } => {
  if (error instanceof ZodError) {
    return {
      message: error.format()._errors.join(", "),
      statusCode: 400,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      statusCode: 500,
    };
  }

  return {
    message: "An unknown error occurred",
    statusCode: 500,
  };
};
