import { ZodError } from 'zod';

export const ZodErrorFormating = (error: ZodError) => {
  const errors: Record<string, string> = {};

  for (const issue of error.issues) {
    const field = issue.path.join('.');

    errors[field] = issue.message;
  }

  return errors;
};
