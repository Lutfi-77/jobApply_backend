import { Request, Response } from 'express';
import { getPublicJobs } from '../services/job.service';

export const getPublicJobsController = async (req: Request, res: Response) => {
  const result = await getPublicJobs();

  return res.success(200, 'Jobs retrieved successfully', result);
};
