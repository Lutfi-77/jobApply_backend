import { z } from 'zod';

export const createJobSchema = z.object({
  title: z.string().min(1).max(150),

  description: z.string().min(1),

  salary: z.string().max(100).optional(),

  type: z.string().min(1).max(20),

  location: z.string().min(1),
});
