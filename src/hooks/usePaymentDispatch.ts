import type { Dispatch } from 'react';
import { useContext } from 'react';

import { PaymentDispatchContext } from '@/providers/paymentProvider';
import type { PaymentAction } from '@/state/payment';

export const usePaymentDispatch = (): Dispatch<PaymentAction> => {
  const context = useContext(PaymentDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('usePaymentDispatch must be used inside of a PaymentProvider');
  }
  return context;
};
