import express from 'express';
import { AccountType } from './jwt.type';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; type: AccountType };
    }
    interface Response {
      success<T>(status: number, message: string, data: T): this;
      fail<T>(status: number, message: string, errors?: T): this;
    }
  }
}
