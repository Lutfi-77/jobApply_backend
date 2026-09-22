import { Request, Response } from 'express';
import {
  createProfile,
  updateProfile,
} from '../services/company-profile.service';
import { validate } from '../validation/validation';
import {
  companyProfileSchema,
  companyProfileUpdateSchema,
} from '../validation/company-profile.schema';

export const updateProfileController = async (req: Request, res: Response) => {
  const validated = validate(companyProfileUpdateSchema, req.body);

  const result = await updateProfile(req.user!.id, validated);

  return res.success(200, 'Profile updated successfully', result);
};

export const addProfileController = async (req: Request, res: Response) => {
  const validated = validate(companyProfileSchema, req.body);
  const result = await createProfile(req.user!.id, validated);
  return res.success(201, 'Data created successfully', result);
};
