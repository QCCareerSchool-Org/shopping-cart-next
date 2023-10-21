import { useContext } from 'react';

import { PaymentStateContext } from '@/providers/paymentProvider';
import type { PaymentState } from '@/state/payment';

export const usePaymentState = (): PaymentState => {
  const context = useContext(PaymentStateContext);
  if (typeof context === 'undefined') {
    throw Error('usePaymentState must be used inside of a PaymentProvider');
  }
  return context;
};
