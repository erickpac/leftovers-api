import SuccessResponse from "@/types/success-response";
import type { Response } from "express";

/**
 * Sends a success response with the specified status code, info, and data.
 *
 * @param res - The response object.
 * @param status - The HTTP status code for the success response (default is 200).
 * @param info - The optional info message to be included in the response.
 * @param data - The data to be included in the response.
 * @returns The response object with the success details.
 */
const success = ({
  res,
  status = 200,
  info,
  data,
}: SuccessResponse): Response => {
  if (info) {
    return res.status(status).json({ info, results: data });
  }

  return res.status(status).json({ results: data });
};

export default success;
