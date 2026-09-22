import { getToken } from '../config/jwt';
import {
  ICompanyProfileRequest,
  ICompanyProfileResponse,
  ICompanyProfileUpdateRequest,
  toResponse,
} from '../interfaces/ICompanyProfile';
import {
  createCompanyProfile,
  updateCompanyProfile,
} from '../repositories/company.repository';

export const createProfile = async (
  idCompany: string,
  request: ICompanyProfileRequest,
): Promise<ICompanyProfileResponse> => {
  const result = await createCompanyProfile(idCompany, request);

  return toResponse(result);
};

export const updateProfile = async (
  companyId: string,
  data: ICompanyProfileUpdateRequest,
) => {
  const profile = await updateCompanyProfile(companyId, data);

  return profile;
};
