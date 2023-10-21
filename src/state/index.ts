import type { Country } from '@/domain/country';

export type State = {
  promoCode?: string;
  countries: Country[];
};

export const initialState: State = {
  countries: [],
};
