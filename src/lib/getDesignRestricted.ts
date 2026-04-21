export const getDesignRestricted = (countryCode: string, provinceCode: string | null): boolean => {
  return countryCode === 'CA' ||
    (countryCode === 'US' && provinceCode === 'LA') ||
    (countryCode === 'US' && provinceCode === 'NV') ||
    (countryCode === 'US' && provinceCode === 'DC');
};
