import { useContext } from 'react';

import { BillingAddressStateContext } from '@/providers/billingAddressProvider';
import type { BillingAddressState } from '@/state/billingAddress';

export const useBillingAddressState = (): BillingAddressState => {
  const context = useContext(BillingAddressStateContext);
  if (typeof context === 'undefined') {
    throw Error('useBillingAddressState must be used inside of a BillingAddressProvider');
  }
  return context;
};
