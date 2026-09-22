import { Request, Response } from 'express';
import { createCompanyJob, getPublicJobs } from '../services/job.service';
import { validate } from '../validation/validation';
import { createJobSchema } from '../validation/job.schema';

export const createJobController = async (req: Request, res: Response) => {
  const validated = validate(createJobSchema, req.body);
  const result = await createCompanyJob(req.user!.id, validated);

  return res.success(201, 'Job created successfully', result);
};
