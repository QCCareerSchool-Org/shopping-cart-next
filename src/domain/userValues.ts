export const userValues = [ 'emailAddress', 'firstName', 'lastName', 'city', 'countryCode', 'provinceCode', 'telephoneNumber' ] as const;

export type UserValue = typeof userValues[number];

export type UserValues = Partial<Record<UserValue, string>>;

export const isUserValues = (obj: unknown): obj is UserValues => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  for (const c of userValues) {
    if (c in obj && typeof (obj as UserValues)[c] !== 'string') {
      return false;
    }
  }
  return true;
};
