import { prisma } from '../config/postgres';
import {
  IUserProfileRequest,
  IUserProfileUpdateRequest,
} from '../interfaces/IUserProfile';

export const findProfileByUserId = async (userId: string) => {
  return prisma.profile.findUnique({
    where: {
      userId,
    },
  });
};

export const createProfile = async (
  userId: string,
  data: IUserProfileRequest,
) => {
  return prisma.profile.create({
    data: {
      //   userId,
      address: data.address,
      skills: data.skills,
      bio: data.bio ?? null,
      cv: data.cv ?? null,
      portfolio: data.portfolio ?? null,

      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

export const updateProfile = async (
  userId: string,
  data: IUserProfileUpdateRequest,
) => {
  return prisma.profile.update({
    where: {
      userId,
    },
    data,
  });
};
