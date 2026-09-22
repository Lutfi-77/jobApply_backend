import { Request, Response } from 'express';
import { login, register } from '../services/user.service';
import {
  createUserProfile,
  updateUserProfile,
} from '../services/user-profile.service';
import { validate } from '../validation/validation';
import { userLoginSchema, userRegisterSchema } from '../validation/user.schema';

export const registerController = async (req: Request, res: Response) => {
  const validated = validate(userRegisterSchema, req.body);
  const result = await register(validated);
  return res.success(201, 'Data created successfully', result);
};

export const loginController = async (req: Request, res: Response) => {
  const validated = validate(userLoginSchema, req.body);
  const result = await login(validated);
  return res.success(200, 'Login successfully', result);
};

export const createProfileController = async (req: Request, res: Response) => {
  const result = await createUserProfile(req.user!.id, req.body);
  return res.success(201, 'Profile created successfully', result);
};

export const updateProfileController = async (req: Request, res: Response) => {
  const result = await updateUserProfile(req.user!.id, req.body);

  return res.success(200, 'Profile updated successfully', result);
};
