import prisma from "@/database/client";

export const getAllStores = async () => {
  return prisma.store.findMany();
};
