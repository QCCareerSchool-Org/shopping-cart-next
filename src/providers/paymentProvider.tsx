'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import type { PaymentAction, PaymentState } from '@/state/payment';
import { initialPaymentState, paymentReducer } from '@/state/payment';

export const PaymentStateContext = createContext<PaymentState | undefined>(undefined);
export const PaymentDispatchContext = createContext<Dispatch<PaymentAction> | undefined>(undefined);

export const PaymentProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useReducer(paymentReducer, initialPaymentState);
  return (
    <PaymentStateContext.Provider value={state}>
      <PaymentDispatchContext.Provider value={dispatch}>
        {children}
      </PaymentDispatchContext.Provider>
    </PaymentStateContext.Provider>
  );
};
