import type { Response } from "express";
import InfoPagination from "./info-pagination";

export default interface SuccessResponse {
  res: Response;
  status?: number;
  data: any;
  info?: InfoPagination;
}
