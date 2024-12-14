export class CustomError extends Error {
  statusCode: number;
  details?: string;

  constructor(message: string, statusCode: number, details?: string) {
    super(message); // Call the parent class constructor
    this.name = "CustomError"; // Set a custom error name
    this.statusCode = statusCode; // HTTP status code
    this.details = details; // Optional details about the error

    // Ensure the name of this error is maintained in stack traces
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}
