import type { Dispatch } from 'react';
import { useContext } from 'react';

import { BillingAddressDispatchContext } from '@/providers/billingAddressProvider';
import type { BillingAddressAction } from '@/state/billingAddress';

export const useBillingAddressDispatch = (): Dispatch<BillingAddressAction> => {
  const context = useContext(BillingAddressDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('useBillingAddressDispatch must be used inside of a BillingAddressProvider');
  }
  return context;
};
