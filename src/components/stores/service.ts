import prisma from "@/database/client";

export const getStores = async () => {
  return prisma.store.findMany();
};
