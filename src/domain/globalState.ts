import type { AddressState } from './address';
import { defaultAddressState } from './address';
import type { Country } from './country';
import type { Price } from './price';
import type { Province } from './province';

export type GlobalState = {
  address: AddressState;
  countryCode: string;
  provinceCode: string | null;
  firstName: string;
  courses: string[];
  promoCode?: string;
  price?: Price;
  countries: Country[];
  provinces: Province[];
};

export const defaultGlobalState: GlobalState = {
  address: defaultAddressState,
  countryCode: 'US',
  provinceCode: 'MD',
  firstName: '',
  courses: [ 'MZ', 'MW' ],
  countries: [],
  provinces: [],
};
