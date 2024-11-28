import SuccessResponse from "@/types/success-response";
import type { Response } from "express";

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
