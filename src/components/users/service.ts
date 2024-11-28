import prisma from "@/database/client";

export const getAllUsers = async () => {
  return prisma.user.findMany();
};
