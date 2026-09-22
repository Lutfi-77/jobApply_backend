import {
  IUserProfileRequest,
  IUserProfileUpdateRequest,
} from '../interfaces/IUserProfile';
import {
  createProfile,
  findProfileByUserId,
  updateProfile,
} from '../repositories/user-profile.repository';
import { AppError } from '../utils/AppError';

export const createUserProfile = async (
  userId: string,
  data: IUserProfileRequest,
) => {
  const existingProfile = await findProfileByUserId(userId);

  if (existingProfile) {
    throw new AppError(409, 'Profile already exists');
  }

  return createProfile(userId, data);
};

export const updateUserProfile = async (
  userId: string,
  data: IUserProfileUpdateRequest,
) => {
  const existingProfile = await findProfileByUserId(userId);

  if (!existingProfile) {
    throw new AppError(404, 'Profile not found');
  }

  return updateProfile(userId, data);
};
