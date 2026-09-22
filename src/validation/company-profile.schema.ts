// schemas/companyProfile.schema.ts

import { z } from 'zod';

export const companyProfileSchema = z.object({
  address: z.string(),
  logo: z.string().optional(),
  bio: z.string().min(30),
});

export const companyProfileUpdateSchema = z.object({
  address: z.string().optional(),
  logo: z.string().optional(),
  bio: z.string().min(30).optional(),
});
