export interface IUserRegisterRequest {
  email: string;
  fullName: string;
  password: string;
}

export interface IUserRegisterResponse {
  id?: string;
  fullName: string;
  email: string;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export const toResponse = (
  data: IUserRegisterResponse,
): IUserRegisterResponse => {
  return {
    email: data.email,
    fullName: data.fullName,
    token: data.token!,
    // createdAt: data.createdAt,
    // updatedAt: data.updatedAt,
  };
};
