'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import { initialPriceState, priceReducer } from '@/state/price';
import type { PriceAction, PriceState } from '@/state/price';

export const PriceStateContext = createContext<PriceState | undefined>(undefined);
export const PriceDispatchContext = createContext<Dispatch<PriceAction> | undefined>(undefined);

export const PriceProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useReducer(priceReducer, initialPriceState);
  return (
    <PriceStateContext.Provider value={state}>
      <PriceDispatchContext.Provider value={dispatch}>
        {children}
      </PriceDispatchContext.Provider>
    </PriceStateContext.Provider>
  );
};
