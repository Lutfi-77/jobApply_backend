export interface IUserProfileRequest {
  address: string;
  skills: string[];
  bio?: string;
  cv?: string;
  portfolio?: string;
}

export interface IUserProfileResponse {
  id: string;
  userId: string;
  address: string;
  skills: string[];
  bio: string | null;
  cv: string | null;
  portfolio: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserProfileUpdateRequest {
  address?: string;
  skills?: string[];
  bio?: string | null;
  cv?: string | null;
  portfolio?: string | null;
}
