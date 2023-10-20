export type Country = {
  name: string;
  code: string;
};

export const isCountry = (obj: unknown): obj is Country => {
  return obj !== null && typeof obj === 'object' &&
    'name' in obj && typeof obj.name === 'string' &&
    'code' in obj && typeof obj.code === 'string';
};

export const isCountries = (obj: unknown): obj is Country[] => {
  if (!Array.isArray(obj)) {
    return false;
  }
  return obj.every(isCountry);
};
