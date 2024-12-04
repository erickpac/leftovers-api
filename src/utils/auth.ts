import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.AUTH_SECRET || '';

/**
 * Hash a plaintext password.
 * @param password - Plaintext password
 * @returns Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Compare plaintext password with hashed password.
 * @param password - Plaintext password
 * @param hashedPassword - Hashed password
 * @returns Boolean indicating if passwords match
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

/**
 * Generate a JWT for a given user ID.
 * @param userId - User ID
 * @returns Signed JWT token
 */
export const generateToken = (userId: number): string => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
};

/**
 * Verify and decode a JWT.
 * @param token - JWT token
 * @returns Decoded token payload
 */
export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
