import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AppError } from '../utils/AppError';
import { AccountType } from '../types/jwt.type';
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new AppError(404, 'SECRET IS MISSING');
}

export const getToken = (userId: string, type: AccountType) => {
  return jwt.sign(
    {
      id: userId,
      type: type,
    },
    JWT_SECRET,
    { expiresIn: '1h' },
  );
};
