import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/jwt';
import { AccountType, JwtPayload } from '../types/jwt.type';

export const authMiddleware = (allowedType: AccountType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;

    if (!JWT_SECRET) {
      return res.fail(401, 'SECRET IS MISSING');
    }

    if (!header) {
      return res.fail(401, 'Authorization Header is Missing');
    }

    const token = header.split(' ')[1];

    if (!token) {
      return res.fail(401, 'Token is Missing');
    }

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // console.log(decoded);
    if (decoded.type !== allowedType) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to access this resource",
      });
    }

    req.user = decoded;
    next();
  };
};
