import prisma from "@/database/client";

export const getUsers = async () => {
  return prisma.user.findMany();
};
