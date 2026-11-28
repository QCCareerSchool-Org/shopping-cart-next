import type { CountryCode } from 'libphonenumber-js';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

/**
 * Converts a free-form telephone number to E.164 format.
 * The country code is used when the number doesn't include an international prefix.
 * Returns undefined when the number can't be parsed into a valid number.
 */
export const toE164 = (telephoneNumber: string, countryCode?: string | null): string | undefined => {
  const parsed = parsePhoneNumberFromString(telephoneNumber, countryCode?.toUpperCase() as CountryCode | undefined);
  return parsed?.isValid() ? parsed.number : undefined;
};
