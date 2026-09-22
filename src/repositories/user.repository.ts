import { User } from '../../prisma/generated/prisma/client';
import { prisma } from '../config/postgres';
import {
  IUserRegisterRequest,
  IUserRegisterResponse,
} from '../interfaces/IUser';

export const findUserByEmail = (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const createUser = (
  user: IUserRegisterRequest,
): Promise<IUserRegisterResponse> => {
  return prisma.user.create({
    data: user,
  });
};
