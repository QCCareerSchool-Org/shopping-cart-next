import type { CurrencyCode } from './currencyCode';

export type Currency = {
  code: CurrencyCode;
  symbol: string;
  name: string;
  exchangeRate: number;
};
