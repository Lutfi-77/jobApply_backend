import { CompanyProfile } from '../../prisma/generated/prisma/browser';
import { prisma } from '../config/postgres';
import {
  ICompanyProfileRequest,
  ICompanyProfileResponse,
  ICompanyProfileUpdateRequest,
} from '../interfaces/ICompanyProfile';

// export const findCompanyProfile = (
//   companyId: string,
// ): Promise<CompanyProfile | null> => {
//   return prisma.companyProfile.findUnique({
//     where: {
//       email: email,
//     },
//   });
// };

export const createCompanyProfile = (
  idCompany: string,
  data: ICompanyProfileRequest,
): Promise<ICompanyProfileResponse> => {
  return prisma.companyProfile.create({
    data: {
      company: {
        connect: {
          id: idCompany,
        },
      },
      bio: data.bio,
      address: data.address,
      logo: data.logo ? data.logo : '',
    },
  });
};

export const updateCompanyProfile = async (
  companyId: string,
  data: ICompanyProfileUpdateRequest,
) => {
  return prisma.companyProfile.update({
    where: {
      companyId,
    },
    data,
  });
};
