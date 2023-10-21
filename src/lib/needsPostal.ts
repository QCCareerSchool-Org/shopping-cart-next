const noPostalCountries = [ 'AO', 'AG', 'AW', 'BS', 'BZ', 'BJ', 'BW', 'BF', 'BI', 'CM', 'TD', 'KM', 'CD', 'CG', 'CK', 'CW', 'DJ', 'DM', 'GQ', 'ER', 'FJ', 'GA', 'GM', 'GH', 'GD', 'GY', 'HM', 'HK', 'CI', 'JM', 'KI', 'LY', 'MO', 'MW', 'ML', 'MR', 'MS', 'NA', 'NR', 'NU', 'KP', 'PA', 'QA', 'RE', 'RW', 'KN', 'LC', 'WS', 'ST', 'SC', 'SL', 'MF', 'SB', 'GS', 'SR', 'SY', 'TZ', 'TG', 'TK', 'TO', 'TT', 'TV', 'UG', 'AE', 'VU', 'YE', 'ZW' ];

export const needsPostal = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return !noPostalCountries.includes(countryCode.toUpperCase());
};
