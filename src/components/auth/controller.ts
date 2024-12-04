import type { Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "@/common/responses";
import { addUser, findUser } from "./service";
import { comparePassword, generateToken, hashPassword } from "@/utils/auth";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await findUser(email);

    if (!user) {
      return sendErrorResponse({ res, statusCode: 404, message: 'User not found' })
    }

    const isValid = await comparePassword(password, user.password || '');
    if (!isValid) {
      return sendErrorResponse({ res, statusCode: 401, message: 'Invalid credentials' })
    }

    const token = generateToken(user.id);
    sendSuccessResponse({ res, data: { token } })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return sendErrorResponse({ res, message });
  }
}

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  try {
    const hashedPassword = await hashPassword(password);
    const user = await addUser({ name, email, hashedPassword })

    return sendSuccessResponse({ res, status: 201, data: { user } })

  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return sendErrorResponse({ res, message });
  }
}
