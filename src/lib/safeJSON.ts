import { stringify } from './json';

export const safeJSON = (obj: unknown): string => {
  return stringify(obj).replace(/</gu, '\\u003c');
};
