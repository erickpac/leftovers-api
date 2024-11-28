import type { Request, Response } from "express";
import prisma from "@/database";
import success from "@/common/responses/success";
import error from "@/common/responses/error";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    success({ res, data: users });
  } catch (err) {
    error({ res, message: err as string });
  }
};
