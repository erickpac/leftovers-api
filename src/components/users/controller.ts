import type { Request, Response } from "express";
import prisma from "@/database";
import { sendSuccessResponse, sendErrorResponse } from "@/common/responses";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    sendSuccessResponse({ res, data: users });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    sendErrorResponse({ res, message: errorMessage });
  }
};
