import { User } from '../../prisma/generated/prisma/browser';
import { getToken } from '../config/jwt';
import {
  IUserLoginRequest,
  IUserRegisterRequest,
  IUserRegisterResponse,
  toResponse,
} from '../interfaces/IUser';
import { findUserByEmail, createUser } from '../repositories/user.repository';
import { AppError } from '../utils/AppError';
import bcrypt from 'bcrypt';

export const register = async (
  data: IUserRegisterRequest,
): Promise<IUserRegisterResponse> => {
  const checkEmailExists = await findUserByEmail(data.email);
  // console.log(checkEmailExists);
  if (checkEmailExists) {
    throw new AppError(409, 'Email Already Exists');
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const payload = { ...data, password: hashedPassword };
  const user = await createUser(payload);
  return toResponse(user);
};

export const login = async (
  request: IUserLoginRequest,
): Promise<IUserRegisterResponse | void> => {
  const user = await findUserByEmail(request.email);
  if (!user) {
    throw new AppError(401, 'Email or Password is Wrong');
  }

  const matchPassword = await bcrypt.compare(request.password, user.password);
  if (!matchPassword) {
    throw new AppError(401, 'Email or Password is Wrong');
  }

  const jwt = getToken(user.id, 'user');
  const result = { ...user, token: jwt };
  // console.log(result);
  return toResponse(result);
};
