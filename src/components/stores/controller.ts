import type { Request, Response } from "express";
import prisma from "@/database";

export const getStores = async (req: Request, res: Response) => {
  const stores = await prisma.store.findMany({
    include: { categories: true, foodItems: true },
  });

  res.status(200).json(stores);
};
