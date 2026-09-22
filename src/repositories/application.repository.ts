import { prisma } from '../config/postgres';

export const findApplication = async (userId: string, jobId: string) => {
  return prisma.application.findUnique({
    where: {
      userId_jobId: {
        userId,
        jobId,
      },
    },
  });
};

export const createApplication = async (userId: string, jobId: string) => {
  return prisma.application.create({
    data: {
      userId,
      jobId,
    },
  });
};
