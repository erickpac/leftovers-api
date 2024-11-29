import type { Response } from "express";
import MessageResponse from "./message-response";

export default interface ErrorResponse extends MessageResponse {
  res: Response;
  statusCode?: number;
  stack?: string;
}
