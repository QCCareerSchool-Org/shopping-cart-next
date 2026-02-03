import { createHash } from 'crypto';

export const hash = (input: string): string => {
  return createHash('sha256').update(input).digest('hex');
};

const removePunctuation = (input: string): string => input.replace(/[^\p{L}\s]/ug, '').replace(/\s+/ug, ' ');

export const normalizeEmailAddress = (emailAddress: string): string => {
  return emailAddress.toLowerCase().trim();
};

export const normalizeTelephoneNumber = (telephoneNumber: string): string => {
  return telephoneNumber.trim().replace(/[^0-9]/ug, '').replace(/^0+/ug, ''); // remove anything that's not a number, and leading zeros
};

export const normalizeName = (name: string): string => {
  return removePunctuation(name.trim().toLowerCase());
};

export const normalizeCity = (city: string): string => {
  return removePunctuation(city.trim().toLowerCase().replace(/\s+/ug, ''));
};

export const normalizeState = (state: string): string => {
  return state.toLowerCase().replace(/[^a-z]/ug, '');
};

export const normalizeZipCode = (zipCode: string, countryCode: string): string => {
  if (countryCode === 'US') {
    return zipCode.trim().substring(0, 4);
  }
  return zipCode.trim().toLowerCase().replace(/\s+/ug, '');
};
