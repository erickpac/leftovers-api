import type { Request, Response } from "express";
import prisma from "@/database";
import sendSuccessResponse from "@/common/responses/success";
import sendErrorResponse from "@/common/responses/error";

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
