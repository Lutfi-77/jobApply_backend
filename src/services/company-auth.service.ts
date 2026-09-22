import { getToken } from '../config/jwt';
import {
  ICompanyLoginRequest,
  ICompanyRegisterRequest,
  ICompanyRegisterResponse,
  toResponse,
} from '../interfaces/ICompany';
import {
  createCompany,
  findUserByEmail,
} from '../repositories/company-auth.repository';
import { AppError } from '../utils/AppError';
import bcrypt from 'bcrypt';

export const register = async (
  data: ICompanyRegisterRequest,
): Promise<ICompanyRegisterResponse> => {
  const checkEmailExists = await findUserByEmail(data.email);
  if (checkEmailExists) {
    throw new AppError(409, 'Email Already Exists');
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const payload = { ...data, password: hashedPassword };
  const user = await createCompany(payload);
  return toResponse(user);
};

export const login = async (
  request: ICompanyLoginRequest,
): Promise<ICompanyRegisterResponse | void> => {
  const company = await findUserByEmail(request.email);
  if (!company) {
    throw new AppError(401, 'Email or Password is Wrong');
  }

  const matchPassword = await bcrypt.compare(
    request.password,
    company.password,
  );
  if (!matchPassword) {
    throw new AppError(401, 'Email or Password is Wrong');
  }

  const jwt = getToken(company.id, 'company');
  const result = { ...company, token: jwt };
  // console.log(result);
  return toResponse(result);
};
