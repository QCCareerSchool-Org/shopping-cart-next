'use client';

import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useState } from 'react';
import type { Country } from '@/domain/country';
import type { GeoLocation } from '@/domain/geoLocation';
import type { GlobalState } from '@/domain/globalState';
import { defaultGlobalState } from '@/domain/globalState';
import type { Province } from '@/domain/province';

export const GlobalStateContext = createContext<[GlobalState, Dispatch<SetStateAction<GlobalState>>] | undefined>(undefined);

type Props = {
  geoLocation?: GeoLocation;
  countries: Country[];
  provinces: Province[];
};

export const StateProvider: FC<PropsWithChildren<Props>> = ({ geoLocation, countries, provinces, children }) => {
  const [ state, setState ] = useState<GlobalState>({
    ...defaultGlobalState,
    ...geoLocation,
    countries,
    provinces,
  });
  return (
    <GlobalStateContext.Provider value={[ state, setState ]}>
      {children}
    </GlobalStateContext.Provider>
  );
};
