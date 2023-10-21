const usEmbargoCountries = [ 'IR', 'KP', 'CU', 'MM', 'SD', 'SY' ];
const africanCountries = [ 'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CD', 'DJ', 'GQ', 'EG', 'ER', 'ET', 'GA', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'CG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'SS', 'SD', 'SZ', 'TZ', 'GM', 'TG', 'TN', 'UG', 'ZA', 'ZM', 'ZW' ];
const fedexCountries = [ 'CF', 'KM', 'CU', 'GQ', 'FK', 'GW', 'IR', 'KI', 'KP', 'YT', 'MM', 'NR', 'NU', 'PM', 'ST', 'SL', 'SB', 'SO', 'SH', 'SD', 'SY', 'TJ', 'TK', 'TM', 'TV', 'UM' ];
const euCountries = [ 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB' ];

/** determines if we are able to ship to a country */
export const noShipCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }

  countryCode = countryCode.toUpperCase();

  if (usEmbargoCountries.includes(countryCode)) {
    return true;
  }

  // Turkey
  if (countryCode === 'TR') { // can't ship makeup kit
    return true;
  }

  // India or Pakistan
  if (countryCode === 'IN' || countryCode === 'PK') {
    return true;
  }

  // Lebanon
  if (countryCode === 'LB') {
    return true;
  }

  // Africa
  if (africanCountries.includes(countryCode.toUpperCase())) {
    return true;
  }

  // additional FedEx restrictions
  if (fedexCountries.includes(countryCode.toUpperCase())) {
    return true;
  }

  if (countryCode !== 'GB' && euCountry(countryCode)) { // EU makeup restriction (except GB)
    return true;
  }

  return false;
};

/** determines if a country is in the EU */
export const euCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return euCountries.includes(countryCode.toUpperCase());
};
