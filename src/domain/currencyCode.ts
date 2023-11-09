export type CurrencyCode = 'CAD' | 'USD' | 'GBP' | 'AUD' | 'NZD';

export const isCurrencyCode = (obj: unknown): obj is CurrencyCode => {
  return typeof obj === 'string' && [ 'CAD', 'USD', 'GBP', 'AUD', 'NZD' ].includes(obj);
};
