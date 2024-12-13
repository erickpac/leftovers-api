import type { Response } from "express";
import { MessageResponse } from "./message-response";

export interface ErrorResponse extends MessageResponse {
  res: Response;
  statusCode?: number;
  stack?: string;
}
