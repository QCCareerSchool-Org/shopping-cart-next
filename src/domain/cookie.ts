type SameSite = boolean | 'lax' | 'strict' | 'none';
type Priority = 'low' | 'medium' | 'high';

export interface CookieData {
  name: string;
  value: string;
  httpOnly?: boolean;
  secure?: boolean;
  maxAge?: number;
  path?: string;
  domain?: string;
  priority?: Priority;
  sameSite?: SameSite;
}

export const isCookieData = (obj: unknown): obj is CookieData => {
  return typeof obj === 'object' && obj !== null &&
    'name' in obj && typeof obj.name === 'string' &&
    'value' in obj && typeof obj.value === 'string' &&
    (('httpOnly' in obj && typeof obj.httpOnly === 'boolean') || !('httpOnly' in obj)) &&
    (('secure' in obj && typeof obj.secure === 'boolean') || !('secure' in obj)) &&
    (('maxAge' in obj && typeof obj.maxAge === 'number') || !('maxAge' in obj)) &&
    (('path' in obj && typeof obj.path === 'string') || !('path' in obj)) &&
    (('domain' in obj && typeof obj.domain === 'string') || !('domain' in obj)) &&
    (('priority' in obj && isPriority(obj.priority)) || !('priority' in obj)) &&
    (('sameSite' in obj && isSameSite(obj.sameSite)) || !('sameSite' in obj));
};

const isSameSite = (obj: unknown): obj is SameSite => {
  return typeof obj === 'boolean' || (typeof obj === 'string' && [ 'lax', 'strict', 'none' ].includes(obj));
};

const isPriority = (obj: unknown): obj is Priority => {
  return typeof obj === 'string' && [ 'low', 'medium', 'high' ].includes(obj);
};
