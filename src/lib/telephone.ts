const callingCode1Countries = [ 'CA', 'US', 'AG', 'AI', 'AS', 'BB', 'BM', 'BS', 'DM', 'DO', 'GD', 'GU', 'JM', 'KN', 'KY', 'LC', 'MP', 'MS', 'PR', 'SX', 'TC', 'TT', 'VC', 'VG', 'VI', 'UM' ];
const callingCode44Countries = [ 'GB', 'IM', 'GG', 'JE' ];
const callingCode61Countries = [ 'AU', 'CX', 'CC' ];
const callingCode64Countries = [ 'NZ', 'PN' ];

/**
 * Determines whether the country of the visitor uses the +44 country dialing code. E.g., United Kingdom
 * @param countryCode the two-character iso-3166-1 alpha-2 country code of the visitor
 */
export const isCallingCode44 = (countryCode: string): boolean => {
  return callingCode44Countries.includes(countryCode);
};

/**
 * Determines whether the country of the visitor uses the +61 country dialing code. E.g., Australia
 * @param countryCode the two-character iso-3166-1 alpha-2 country code of the visitor
 */
export const isCallingCode61 = (countryCode: string): boolean => {
  return callingCode61Countries.includes(countryCode);
};

/**
 * Determines whether the country of the visitor uses the +64 country dialing code. E.g., New Zealand
 * @param countryCode the two-character iso-3166-1 alpha-2 country code of the visitor
 */
export const isCallingCode64 = (countryCode: string): boolean => {
  return callingCode64Countries.includes(countryCode);
};

/**
 * Determines whether the country of the visitor uses the +1 country dialing code. E.g., Canada, United States, Jamaica
 * @param countryCode the two-character iso-3166-1 alpha-2 country code of the visitor
 */
export function isCallingCode1(countryCode: string): boolean {
  return callingCode1Countries.includes(countryCode);
}

/**
 * Determines the appropriate telephone number based on the country of the visitor.
 * @param countryCode the two-character iso-3166-1 alpha-2 country code of the visitor
 * @returns the telephone number
 */
export const telephoneNumber = (countryCode: string): string => {
  if (isCallingCode1(countryCode)) { return '1-833-600-3751'; }
  if (isCallingCode44(countryCode)) { return '0800 066 4734'; }
  if (isCallingCode61(countryCode)) { return '1800 531 923'; }
  if (isCallingCode64(countryCode)) { return '0800 451 979'; }
  return '+1 613 749 8248';
};
