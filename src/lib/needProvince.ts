export const needsProvince = (countryCode: string): boolean => {
  return countryCode === 'CA' || countryCode === 'US' || countryCode === 'AU';
};
