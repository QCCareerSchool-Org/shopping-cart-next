import type { Dispatch } from 'react';
import { useContext } from 'react';

import { PriceDispatchContext } from '@/providers/priceProvider';
import type { PriceAction } from '@/state/price';

export const usePriceDispatch = (): Dispatch<PriceAction> => {
  const context = useContext(PriceDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('usePriceDispatch must be used inside of a PriceProvider');
  }
  return context;
};
