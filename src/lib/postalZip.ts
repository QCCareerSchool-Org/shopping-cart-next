/** determines the name for a postal codes */
export const postalZip = (countryCode: string | null): string => {
  if (countryCode === 'US') {
    return 'zip code';
  }
  if (countryCode === 'CA') {
    return 'postal code';
  }
  return 'postcode';
};
