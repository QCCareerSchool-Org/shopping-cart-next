'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import type { GeoLocation } from '@/domain/geoLocation';
import type { Province } from '@/domain/province';
import type { BillingAddressAction, BillingAddressState } from '@/state/billingAddress';
import { billingAddressReducer, initialBillingAddressState } from '@/state/billingAddress';

export const BillingAddressStateContext = createContext<BillingAddressState | undefined>(undefined);
export const BillingAddressDispatchContext = createContext<Dispatch<BillingAddressAction> | undefined>(undefined);

type Props = {
  geoLocation: GeoLocation;
  provinces: Province[];
};

export const BillingAddressProvider: FC<PropsWithChildren<Props>> = ({ geoLocation, provinces, children }) => {
  const [ state, dispatch ] = useReducer(billingAddressReducer, {
    ...initialBillingAddressState,
    countryCode: geoLocation.countryCode,
    provinceCode: geoLocation.provinceCode,
    provinces,
  });
  return (
    <BillingAddressStateContext.Provider value={state}>
      <BillingAddressDispatchContext.Provider value={dispatch}>
        {children}
      </BillingAddressDispatchContext.Provider>
    </BillingAddressStateContext.Provider>
  );
};
