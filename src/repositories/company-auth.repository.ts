import { CompanyAccount } from '../../prisma/generated/prisma/client';
import { prisma } from '../config/postgres';
import {
  ICompanyRegisterRequest,
  ICompanyRegisterResponse,
} from '../interfaces/ICompany';

export const findUserByEmail = (
  email: string,
): Promise<CompanyAccount | null> => {
  return prisma.companyAccount.findUnique({
    where: {
      email: email,
    },
  });
};

export const createCompany = (
  company: ICompanyRegisterRequest,
): Promise<ICompanyRegisterResponse> => {
  return prisma.companyAccount.create({
    data: company,
  });
};
