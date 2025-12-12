export interface Province {
  name: string;
  code: string;
}

export const isProvince = (obj: unknown): obj is Province => {
  return obj !== null && typeof obj === 'object' &&
    'name' in obj && typeof obj.name === 'string' &&
    'code' in obj && typeof obj.code === 'string';
};

export const isProvinces = (obj: unknown): obj is Province[] => {
  if (!Array.isArray(obj)) {
    return false;
  }
  return obj.every(isProvince);
};
