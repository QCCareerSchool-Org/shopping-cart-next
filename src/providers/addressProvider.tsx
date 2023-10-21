'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import type { GeoLocation } from '@/domain/geoLocation';
import type { Province } from '@/domain/province';
import type { AddressAction, AddressState } from '@/state/address';
import { addressReducer, initialAddressState } from '@/state/address';

export const AddressStateContext = createContext<AddressState | undefined>(undefined);
export const AddressDispatchContext = createContext<Dispatch<AddressAction> | undefined>(undefined);

type Props = {
  geoLocation: GeoLocation;
  provinces: Province[];
};

export const AddressProvider: FC<PropsWithChildren<Props>> = ({ geoLocation, provinces, children }) => {
  const [ state, dispatch ] = useReducer(addressReducer, {
    ...initialAddressState,
    countryCode: geoLocation.countryCode,
    provinceCode: geoLocation.provinceCode,
    provinces,
  });
  return (
    <AddressStateContext.Provider value={state}>
      <AddressDispatchContext.Provider value={dispatch}>
        {children}
      </AddressDispatchContext.Provider>
    </AddressStateContext.Provider>
  );
};
