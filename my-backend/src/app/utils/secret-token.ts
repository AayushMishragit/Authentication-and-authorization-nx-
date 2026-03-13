import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

/**
 * Generates a JWT valid for 7 days
 * Includes the user ID and role for easy authorization in middleware
 */
export const generateToken = (id: string): string => {
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error('JWT_SECRET is not defined in .env file');
  }

  // Set to '7d' for one week of session persistence
  return jwt.sign({ id }, secretKey, { expiresIn: '7d' });
};