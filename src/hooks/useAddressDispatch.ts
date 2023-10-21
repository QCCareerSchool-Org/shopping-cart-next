import type { Dispatch } from 'react';
import { useContext } from 'react';

import { AddressDispatchContext } from '@/providers/addressProvider';
import type { AddressAction } from '@/state/address';

export const useAddressDispatch = (): Dispatch<AddressAction> => {
  const context = useContext(AddressDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('useAddressDispatch must be used inside of a AddressProvider');
  }
  return context;
};
