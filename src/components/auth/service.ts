import prisma from "@/database/client";
import RegisterUserBody from "@/types/auth";

export const findUser = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

export const addUser = async ({ name, email, hashedPassword }: RegisterUserBody) => {
  const response = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
  return response;
}
