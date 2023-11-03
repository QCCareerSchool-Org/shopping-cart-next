import type { AddressState } from '@/state/address';
import type { BillingAddressState } from '@/state/billingAddress';
import type { PaymentState } from '@/state/payment';

export const saveForm = (courses: string[], address: AddressState, billingAddress: BillingAddressState, payment: PaymentState): void => {
  if (!('sessionStorage' in window)) {
    return;
  }
  try {
    window.sessionStorage.setItem('form', JSON.stringify({
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
    }));
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
