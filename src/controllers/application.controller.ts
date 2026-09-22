import { Request, Response } from 'express';

import { applyJob } from '../services/application.service';

export const applyJobController = async (req: Request, res: Response) => {
  const { jobId } = req.params;
  if (!jobId || Array.isArray(jobId)) {
    return res.fail(400, 'Invalid job ID');
  }

  const result = await applyJob(req.user!.id, jobId);

  return res.success(201, 'Job application submitted successfully', result);
};
