import type { Province } from './province';

export type Title = 'Mrs.' | 'Miss' | 'Ms.' | 'Mr.';

export type AddressState = {
  title: Title;
  firstName: string;
  lastName: string;
  emailAddress: string;
  telephoneNumber: string;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string | null;
  postalCode: string;
  countryCode: string;
  locationModified: boolean;
  provinces: Province[];
};

export const defaultAddressState: AddressState = {
  title: 'Mrs.',
  firstName: '',
  lastName: '',
  emailAddress: '',
  telephoneNumber: '',
  address1: '',
  address2: '',
  city: '',
  provinceCode: 'MD',
  postalCode: '',
  countryCode: 'US',
  locationModified: false,
  provinces: [ { code: 'MD', name: 'Maryland' } ],
};
