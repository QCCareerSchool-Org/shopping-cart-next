import { isEnvironment } from 'paysafe-form';

import type { CurrencyCode } from '@/domain/currencyCode';
import type { PaysafeCompany } from '@/domain/paysafeCompany';

export const environment = isEnvironment(process.env.NEXT_PUBLIC_PAYSAFE_ENVIRONMENT)
  ? process.env.NEXT_PUBLIC_PAYSAFE_ENVIRONMENT
  : 'TEST';

const apiKeys: Record<PaysafeCompany, string | undefined> = {
  CA: process.env.NEXT_PUBLIC_PAYSAFE_PUBLIC_KEY_CA,
  US: process.env.NEXT_PUBLIC_PAYSAFE_PUBLIC_KEY_US,
};

const accountIds: Record<PaysafeCompany, Partial<Record<CurrencyCode, number>>> = {
  CA: {
    CAD: process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_CAD ? parseInt(process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_CAD, 10) : undefined,
    NZD: process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_NZD ? parseInt(process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_NZD, 10) : undefined,
    AUD: process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_AUD ? parseInt(process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_AUD, 10) : undefined,
    GBP: process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_GBP ? parseInt(process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_CA_GBP, 10) : undefined,
  },
  US: {
    USD: process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_US_USD ? parseInt(process.env.NEXT_PUBLIC_PAYSAFE_ACCOUNT_ID_US_USD, 10) : undefined,
  },
};

export const getCodes = (company: PaysafeCompany, currencyCode: CurrencyCode): { apiKey: string | null; accountId: number | null } => {
  const apiKey = apiKeys[company];
  if (!apiKey) {
    throw Error('API key not found');
  }

  const accountId = accountIds[company][currencyCode];
  if (!accountId) {
    throw Error('Account ID not found');
  }

  return { apiKey, accountId };
};
