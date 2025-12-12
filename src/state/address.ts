import type { Province } from '../domain/province';
import type { Title } from '@/domain/title';
import { needsProvince } from '@/lib/needProvince';
import { needsPostal } from '@/lib/needsPostal';

export interface AddressState {
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
  provinces: Province[];
}

export type AddressAction =
  | { type: 'SET_COUNTRY_CODE_WITH_PROVINCES'; payload: { countryCode: string; provinces: Province[] } }
  | { type: 'SET_COUNTRY_CODE'; payload: { countryCode: string } }
  | { type: 'SET_PROVINCE_CODE'; payload: { provinceCode: string | null } }
  | { type: 'SET_TITLE'; payload: Title }
  | { type: 'SET_FIRST_NAME'; payload: string }
  | { type: 'SET_LAST_NAME'; payload: string }
  | { type: 'SET_EMAIL_ADDRESS'; payload: string }
  | { type: 'SET_TELEPHONE_NUMBER'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'SET_ADDRESS1'; payload: string }
  | { type: 'SET_ADDRESS2'; payload: string }
  | { type: 'SET_POSTAL_CODE'; payload: string };

export const addressReducer = (state: AddressState, action: AddressAction): AddressState => {
  switch (action.type) {
    case 'SET_COUNTRY_CODE_WITH_PROVINCES':
      if (action.payload.provinces.length === 0) {
        throw Error('No provinces supplied');
      }
      return {
        ...state,
        countryCode: action.payload.countryCode,
        provinceCode: action.payload.provinces[0].code,
        postalCode: needsPostal(action.payload.countryCode) ? state.postalCode : '',
        provinces: action.payload.provinces,
      };
    case 'SET_COUNTRY_CODE':
      if (needsProvince(action.payload.countryCode)) {
        throw Error('Provinces required');
      }
      return {
        ...state,
        countryCode: action.payload.countryCode,
        provinceCode: null,
        postalCode: needsPostal(action.payload.countryCode) ? state.postalCode : '',
        provinces: [],
      };
    case 'SET_PROVINCE_CODE':
      if (!state.provinces.some(p => p.code === action.payload.provinceCode)) {
        throw Error('Invalid province code');
      }
      return {
        ...state,
        provinceCode: action.payload.provinceCode,
      };
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'SET_LAST_NAME':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'SET_EMAIL_ADDRESS':
      return {
        ...state,
        emailAddress: action.payload,
      };
    case 'SET_TELEPHONE_NUMBER':
      return {
        ...state,
        telephoneNumber: action.payload,
      };
    case 'SET_ADDRESS1':
      return {
        ...state,
        address1: action.payload,
      };
    case 'SET_ADDRESS2':
      return {
        ...state,
        address2: action.payload,
      };
    case 'SET_CITY':
      return {
        ...state,
        city: action.payload,
      }; case 'SET_POSTAL_CODE':
      return {
        ...state,
        postalCode: action.payload,
      };
  }
};

export const initialAddressState: AddressState = {
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
  provinces: [ { code: 'MD', name: 'Maryland' } ],
};
