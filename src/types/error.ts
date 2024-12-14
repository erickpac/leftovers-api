import { MessageResponse } from "./message-response";

export interface ErrorObject extends MessageResponse {
  statusCode?: number;
  stack?: string;
}
