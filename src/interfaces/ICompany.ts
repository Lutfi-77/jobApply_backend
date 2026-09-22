export interface ICompanyRegisterRequest {
  email: string;
  companyName: string;
  password: string;
}

export interface ICompanyRegisterResponse {
  id?: string;
  companyName: string;
  email: string;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICompanyLoginRequest {
  email: string;
  password: string;
}

export const toResponse = (
  data: ICompanyRegisterResponse,
): ICompanyRegisterResponse => {
  return {
    email: data.email,
    companyName: data.companyName,
    token: data.token!,
    // createdAt: data.createdAt,
    // updatedAt: data.updatedAt,
  };
};
