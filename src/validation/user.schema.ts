import { z } from 'zod';

export const userRegisterSchema = z.object({
  email: z.string().min(5),
  fullName: z.string().min(3),
  password: z.string().min(5),
});

export const userLoginSchema = z.object({
  email: z.string().min(5),
  password: z.string().min(5),
});

export const profileSchema = z.object({
  address: z.string().min(1),
  skills: z.array(z.string()).min(1),
  bio: z.string().optional(),
  cv: z.string().optional(),
  portfolio: z.string().optional(),
});

// validation/update-profile.schema.ts
export const updateProfileSchema = z.object({
  address: z.string().min(1).optional(),

  skills: z.array(z.string()).min(1).optional(),

  bio: z.string().optional().nullable(),

  cv: z.string().optional().nullable(),

  portfolio: z.string().optional().nullable(),
});
