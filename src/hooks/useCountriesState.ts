import { useContext } from 'react';

import type { Country } from '@/domain/country';
import { CountriesStateContext } from '@/providers/countriesProvider';

export const useCountriesState = (): Country[] => {
  const context = useContext(CountriesStateContext);
  if (typeof context === 'undefined') {
    throw Error('useCountriesState must be used inside of a CountriesProvider');
  }
  return context;
};
