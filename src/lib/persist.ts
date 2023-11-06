import { isPaymentPlan, type PaymentPlan } from '@/domain/paymentPlan';
import type { AddressState } from '@/state/address';
import type { BillingAddressState } from '@/state/billingAddress';
import type { PaymentState } from '@/state/payment';

type Address = {
  title: string;
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
};

type BillingAddress = Address & { sameAsShipping: boolean };

export type StoredData = {
  courses: string[];
  studentAddress: Address;
  billingAddress: BillingAddress;
  paymentDay: number;
  paymentPlan: PaymentPlan;
};

const isAddress = (obj: unknown): obj is Address => {
  return obj !== null && typeof obj === 'object' &&
    'title' in obj && typeof obj.title === 'string' &&
    'firstName' in obj && typeof obj.firstName === 'string' &&
    'lastName' in obj && typeof obj.lastName === 'string' &&
    'emailAddress' in obj && typeof obj.emailAddress === 'string' &&
    'telephoneNumber' in obj && typeof obj.telephoneNumber === 'string' &&
    'address1' in obj && typeof obj.address1 === 'string' &&
    'address2' in obj && typeof obj.address2 === 'string' &&
    'city' in obj && typeof obj.city === 'string' &&
    'provinceCode' in obj && (typeof obj.provinceCode === 'string' || obj.provinceCode === null) &&
    'postalCode' in obj && typeof obj.postalCode === 'string' &&
    'countryCode' in obj && typeof obj.countryCode === 'string';
};

const isBillingAddress = (obj: unknown): obj is BillingAddress => {
  return isAddress(obj) && 'sameAsShipping' in obj && typeof obj.sameAsShipping === 'boolean';
};

const isStoredData = (obj: unknown): obj is StoredData => {
  return obj !== null && typeof obj === 'object' &&
    'studentAddress' in obj && isAddress(obj.studentAddress) &&
    'billingAddress' in obj && isBillingAddress(obj.billingAddress) &&
    'paymentDay' in obj && typeof obj.paymentDay === 'number' &&
    'paymentPlan' in obj && isPaymentPlan(obj.paymentPlan);
};

export const saveForm = (courses: string[], address: AddressState, billingAddress: BillingAddressState, payment: PaymentState): void => {
  if (!('sessionStorage' in window)) {
    return;
  }
  const storedData: StoredData = {
    courses,
    studentAddress: {
      title: address.title,
      firstName: address.firstName,
      lastName: address.lastName,
      emailAddress: address.emailAddress,
      telephoneNumber: address.telephoneNumber,
      address1: address.address1,
      address2: address.address1,
      city: address.city,
      provinceCode: address.provinceCode,
      postalCode: address.postalCode,
      countryCode: address.countryCode,
    },
    billingAddress: {
      sameAsShipping: billingAddress.sameAsShipping,
      title: billingAddress.title,
      firstName: billingAddress.firstName,
      lastName: billingAddress.lastName,
      emailAddress: billingAddress.emailAddress,
      telephoneNumber: billingAddress.telephoneNumber,
      address1: billingAddress.address1,
      address2: billingAddress.address1,
      city: billingAddress.city,
      provinceCode: billingAddress.provinceCode,
      postalCode: billingAddress.postalCode,
      countryCode: billingAddress.countryCode,
    },
    paymentDay: payment.day,
    paymentPlan: payment.plan,
  };
  try {
    window.sessionStorage.setItem('form', JSON.stringify(storedData));
  } catch (err) {
    console.error(err);
  }
};

export const clearForm = (): void => {
  if (!('sessionStorage' in window)) {
    return;
  }
  try {
    window.sessionStorage.removeItem('form');
  } catch (err) {
    console.error(err);
  }
};

export const loadForm = (): StoredData | undefined => {
  if (!('sessionStorage' in window)) {
    return;
  }
  const storedData = window.sessionStorage.getItem('form');
  if (!storedData) {
    return;
  }
  try {
    const formData: unknown = JSON.parse(storedData);
    if (!isStoredData(formData)) {
      throw Error('Invalid form data');
    }
    return formData;
  } catch (err) {
    console.error(err);
  }
};
