'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

import type { Country } from '@/domain/country';

export const CountriesStateContext = createContext<Country[] | undefined>(undefined);

interface Props {
  countries: Country[];
}

export const CountriesProvider: FC<PropsWithChildren<Props>> = ({ countries, children }) => {
  const [ state ] = useState<Country[]>(countries);
  return (
    <CountriesStateContext.Provider value={state}>
      {children}
    </CountriesStateContext.Provider>
  );
};
