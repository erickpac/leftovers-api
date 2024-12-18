import { MessageResponse } from "./message-response";

export interface ErrorObject extends MessageResponse {
  statusCode?: number;
  errors?: unknown[];
  stack?: string;
}
