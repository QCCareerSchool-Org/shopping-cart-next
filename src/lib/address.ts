import { audCountry, nzdCountry } from './currencies';

/**
 * Determines the appropriate mailing address based on the country of the visitor.
 * @param countryCode the two-character iso-3166-1 alpha-2 country code of the visitor
 * @returns an array of the lines of the address
 */
export const getAddress = (countryCode: string): string[] => {
  // if (gbpCountry(countryCode)) { return [ 'Suite 18', '186 St. Albans Road', 'Watford WD24 4AS' ]; }
  if (audCountry(countryCode)) { return [ 'Suite 23', '78 Williams Street', 'Sydney NSW 2011' ]; }
  if (nzdCountry(countryCode)) { return [ 'Suite 23', '78 Williams Street', 'Sydney NSW 2011', 'Australia' ]; }
  if (countryCode === 'US') { return [ 'Suite 450', '1 Research Court', 'Rockville MD 20850' ]; }
  if (countryCode === 'CA') { return [ '38 McArthur Avenue', 'Ottawa ON K1L 6R2' ]; }
  return [ '38 McArthur Avenue', 'Ottawa ON K1L 6R2', 'Canada' ];
};
