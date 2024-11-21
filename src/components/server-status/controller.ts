import type { Request, Response } from "express";

export const getServerStatus = (req: Request, res: Response) => {
  const status = {
    status: "Server is running",
    timestamp: new Date(),
  };

  res.json(status);
};
