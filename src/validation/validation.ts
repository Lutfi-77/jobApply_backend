import { ZodType } from 'zod';

export const validate = <T>(schema: ZodType<T>, request: T): T => {
  return schema.parse(request);
};
