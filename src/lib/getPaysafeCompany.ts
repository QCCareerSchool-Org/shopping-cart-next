import type { PaysafeCompany } from '@/domain/paysafeCompany';

export const getPaysafeCompany = (currencyCode: string): PaysafeCompany => {
  switch (currencyCode) {
    case 'USD':
      return 'US';
    case 'CAD':
    case 'AUD':
    case 'NZD':
    case 'GBP':
      return 'CA';
    default:
      throw Error('unknown currency');
  }
};
