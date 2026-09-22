import { AppError } from '../utils/AppError';

import {
  createApplication,
  findApplication,
} from '../repositories/application.repository';
import { findPublicJobById } from '../repositories/job.repository';

export const applyJob = async (userId: string, jobId: string) => {
  const job = await findPublicJobById(jobId);

  if (!job) {
    throw new AppError(404, 'Job not found');
  }

  const existingApplication = await findApplication(userId, jobId);

  if (existingApplication) {
    throw new AppError(409, 'You have already applied for this job');
  }
  return createApplication(userId, jobId);
};
