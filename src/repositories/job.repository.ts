import { prisma } from '../config/postgres';
import { ICreateJobRequest } from '../interfaces/IJob';

export const findAllJobs = async () => {
  return prisma.job.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      updatedAt: true,
      company: {
        select: {
          id: true,
          companyName: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const findPublicJobById = async (jobId: string) => {
  return prisma.job.findUnique({
    where: {
      id: jobId,
    },
  });
};

export const findJobById = async (jobId: string) => {
  return prisma.job.findUnique({
    where: {
      id: jobId,
    },
  });
};

export const createJob = async (companyId: string, data: ICreateJobRequest) => {
  return prisma.job.create({
    data: {
      companyId,
      title: data.title,
      description: data.description,
      salary: data.salary ?? null,
      type: data.type,
      location: data.location,
    },
  });
};
