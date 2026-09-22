export type AccountType = 'user' | 'company';

export interface JwtPayload {
  id: string;
  type: AccountType;
}
