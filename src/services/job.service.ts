import { ICreateJobRequest } from '../interfaces/IJob';
import { createJob, findAllJobs } from '../repositories/job.repository';

export const getPublicJobs = async () => {
  return findAllJobs();
};

export const createCompanyJob = async (
  companyId: string,
  data: ICreateJobRequest,
) => {
  return createJob(companyId, data);
};
