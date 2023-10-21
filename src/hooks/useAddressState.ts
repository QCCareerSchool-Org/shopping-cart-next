import { useContext } from 'react';

import { AddressStateContext } from '@/providers/addressProvider';
import type { AddressState } from '@/state/address';

export const useAddressState = (): AddressState => {
  const context = useContext(AddressStateContext);
  if (typeof context === 'undefined') {
    throw Error('useAddressState must be used inside of a AddressProvider');
  }
  return context;
};
