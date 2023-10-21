import { useContext } from 'react';

import { PriceStateContext } from '@/providers/priceProvider';
import type { PriceState } from '@/state/price';

export const usePriceState = (): PriceState => {
  const context = useContext(PriceStateContext);
  if (typeof context === 'undefined') {
    throw Error('usePriceState must be used inside of a PriceProvider');
  }
  return context;
};
