import type { PaysafeCompany } from '@/domain/paysafeCompany';

export const getPaysafeCompany = (currencyCode: string): PaysafeCompany => {
  if ([ 'GBP', 'AUD', 'NZD' ].includes(currencyCode)) {
    return 'GB';
  }
  if (currencyCode === 'USD') {
    return 'US';
  }
  if (currencyCode === 'CAD') {
    return 'CA';
  }
  throw Error('unknown currency');
};
