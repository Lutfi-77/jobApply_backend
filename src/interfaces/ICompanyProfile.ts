export interface ICompanyProfileRequest {
  address: string;
  logo?: string;
  bio: string;
}

export interface ICompanyProfileResponse {
  id: string;
  companyId?: string;
  address: string;
  logo?: string | null;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICompanyProfileUpdateRequest {
  address?: string;
  logo?: string;
  bio?: string;
}

export const toResponse = (
  data: ICompanyProfileResponse,
): ICompanyProfileResponse => {
  return {
    id: data.id,
    address: data.address,
    logo: data.logo || null,
    bio: data.bio,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
};
