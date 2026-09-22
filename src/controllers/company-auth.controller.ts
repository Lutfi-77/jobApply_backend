import { Request, Response } from 'express';
import { login, register } from '../services/company-auth.service';

export const registerController = async (req: Request, res: Response) => {
  const result = await register(req.body);
  return res.success(201, 'Data created successfully', result);
};

export const loginController = async (req: Request, res: Response) => {
  const result = await login(req.body);
  return res.success(200, 'Login successfully', result);
};

// export const profileController = async (req: Request, res: Response) => {
//   // const result = await login(req.body);
//   return res.success(200, 'Login successfully', 'LOLOS');
// };
