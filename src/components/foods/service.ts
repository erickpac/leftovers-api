import prisma from "@/database/client";

export const getFoodById = async (id: number) => {
  return prisma.foodItem.findUnique({
    where: { id },
    include: { store: true },
  });
};
