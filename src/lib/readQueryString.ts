import { needsProvince } from './needProvince';
import { needsPostal } from './needsPostal';
import type { PaymentPlan } from '@/domain/paymentPlan';
import { isPaymentPlan } from '@/domain/paymentPlan';
import { isTitle } from '@/domain/title';
import type { AddressState } from '@/state/address';

type StoredData = {
  address: Partial<AddressState>;
  courses: string[];
  promoCode?: string;
  paymentPlan?: PaymentPlan;
};

export const readQueryString = (searchParams: Record<string, string | string[] | undefined>): StoredData => {
  const storedData: StoredData = {
    address: {},
    courses: [],
  };

  // country, province
  if (typeof searchParams.countryCode === 'string') {
    if (needsProvince(searchParams.countryCode)) {
      if (typeof searchParams.provinceCode === 'string') {
        storedData.address.countryCode = searchParams.countryCode;
        storedData.address.provinceCode = searchParams.provinceCode;
      }
    } else {
      storedData.address.countryCode = searchParams.countryCode;
    }
  }

  // title
  if (typeof searchParams.title === 'string' && isTitle(searchParams.title)) {
    storedData.address.title = searchParams.title;
  }

  // first name
  if (typeof searchParams.firstName === 'string') {
    storedData.address.firstName = searchParams.firstName;
  }

  // last name
  if (typeof searchParams.lastName === 'string') {
    storedData.address.lastName = searchParams.lastName;
  }

  // email address
  if (typeof searchParams.emailAddress === 'string') {
    storedData.address.emailAddress = searchParams.emailAddress;
  }

  // telephone number
  if (typeof searchParams.telephoneNumber === 'string') {
    storedData.address.telephoneNumber = searchParams.telephoneNumber;
  }

  // address first line
  if (typeof searchParams.address1 === 'string') {
    storedData.address.address1 = searchParams.address1;
  }

  // address first line
  if (typeof searchParams.address2 === 'string') {
    storedData.address.address2 = searchParams.address2;
  }

  // city
  if (typeof searchParams.city === 'string') {
    storedData.address.city = searchParams.city;
  }

  // postal code
  if (typeof searchParams.postalCode === 'string' && storedData.address.countryCode && needsPostal(storedData.address.countryCode)) {
    storedData.address.postalCode = searchParams.postalCode;
  }

  // courses
  if (searchParams.c) {
    if (Array.isArray(searchParams.c)) {
      storedData.courses.push(...searchParams.c);
    } else {
      storedData.courses.push(searchParams.c);
    }
  }

  // promo code
  if (typeof searchParams.promoCode === 'string') {
    storedData.promoCode = searchParams.promoCode;
  }

  // payment plan
  if (typeof searchParams.paymentPlan === 'string' && isPaymentPlan(searchParams.paymentPlan)) {
    storedData.paymentPlan = searchParams.paymentPlan;
  }

  return storedData;
};
