export type NoShipping = 'ALLOWED' | 'APPLIED' | 'REQUIRED' | 'FORBIDDEN';

export const isNoShipping = (obj: unknown): obj is NoShipping => {
  return typeof obj === 'string' && [ 'ALLOWED', 'APPLIED', 'REQUIRED', 'FORBIDDEN' ].includes(obj);
};
