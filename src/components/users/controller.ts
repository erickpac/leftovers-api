import type { Request, Response } from "express";
import prisma from "@/database";

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
};
