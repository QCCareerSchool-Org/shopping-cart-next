/** determines the name for a country's subdivisions */
export const provinceState = (countryCode: string | null): string => {
  return countryCode === 'US' || countryCode === 'AU' ? 'state' : 'province';
};
