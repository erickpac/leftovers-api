import type { Response } from "express";
import { InfoPagination } from "./info-pagination";

export interface SuccessResponse {
  res: Response;
  status?: number;
  message?: string;
  data: any;
  info?: InfoPagination;
}
