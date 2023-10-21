const eurozoneCountries = [ 'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES' ];

/** determines if a country is in the Eurozone */
export const eurozone = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return eurozoneCountries.includes(countryCode.toUpperCase());
};

const euroUsingCountries = [ 'VA', 'MC', 'SM' ];

/** determines if county uses euros as its primary currency */
export const euroUsingCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return eurozone(countryCode) || euroUsingCountries.includes(countryCode.toUpperCase());
};

const euroCountries = [ 'AL', 'AD', 'AM', 'AZ', 'BY', 'BA', 'BG', 'HR', 'CZ', 'DK', 'GE', 'HU', 'IS', 'LV', 'LU', 'LT', 'MK', 'MD', 'ME', 'NO', 'PL', 'RO', 'RU', 'RS', 'SE', 'CH', 'TR', 'UA' ];

/** determines if we charge people from a country in euros */
export const euroCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return euroUsingCountry(countryCode) || euroCountries.includes(countryCode.toUpperCase());
};

const gbpCountries = [ 'GB', 'IM', 'GG', 'JE', 'GS' ];

/** determines if we charge people from a country in pounds sterling */
export const gbpCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return gbpCountries.includes(countryCode.toUpperCase());
};

const audCountries = [ 'AU', 'CX', 'CC', 'NR', 'NF', 'HM' ];

/** determines if we charge people from a country in Australian dollars */
export const audCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return audCountries.includes(countryCode.toUpperCase());
};

const nzdCountries = [ 'NZ', 'TK', 'NU', 'PN' ];

/** determines if we charge people from a country in Australian dollars */
export const nzdCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return nzdCountries.includes(countryCode.toUpperCase());
};
