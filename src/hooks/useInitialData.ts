import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { useAddressDispatch } from './useAddressDispatch';
import { useAddressState } from './useAddressState';
import { useBillingAddressDispatch } from './useBillingAddressDispatch';
import { useBillingAddressState } from './useBillingAddressState';
import { useCountriesState } from './useCountriesState';
import { useCoursesDispatch } from './useCoursesDispatch';
import { useMetaDispatch } from './useMetaDispatch';
import { usePaymentDispatch } from './usePaymentDispatch';
import type { CourseGroup } from '@/domain/courseGroup';
import type { PaymentPlan } from '@/domain/paymentPlan';
import { isPaymentPlan } from '@/domain/paymentPlan';
import type { School, SchoolVariant } from '@/domain/school';
import { isTitle } from '@/domain/title';
import { fetchProvinces } from '@/lib/fetch';
import { needsProvince } from '@/lib/needProvince';
import { needsPostal } from '@/lib/needsPostal';
import { loadForm } from '@/lib/persist';

interface Address {
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  telephoneNumber: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  provinceCode: string | null;
  postalCode: string | null;
  countryCode: string | null;
}

type BillingAddress = Address & { sameAsShipping: boolean | null };

interface Data {
  courses: string[] | null;
  studentAddress: Address;
  billingAddress: BillingAddress;
  paymentDay: number | null;
  paymentPlan: PaymentPlan | null;
  promoCode: string | null;
}

export const useInitialData = (school: School, schoolVariant: SchoolVariant | undefined, student: boolean, courseGroups: CourseGroup[], coursesOverride?: string[], billingAddressDefault?: 'same' | 'different'): void => {
  const searchParams = useSearchParams();
  const countries = useCountriesState();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const coursesDispatch = useCoursesDispatch();
  const metaDispatch = useMetaDispatch();
  const paymentDispatch = usePaymentDispatch();

  /** has the effect already run? */
  const alreadyRun = useRef(false);

  useEffect(() => {
    // make sure we only run once
    if (alreadyRun.current) {
      return;
    }

    alreadyRun.current = true;

    paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: school === 'QC Pet Studies' || school === 'QC Design School' || school === 'QC Event School' ? 'full' : 'part' });

    if (student) {
      metaDispatch({ type: 'SET_STUDENT', payload: student });
    }

    coursesDispatch({ type: 'CLEAR_COURSES', payload: { student, countryCode: addressState.countryCode, provinceCode: addressState.provinceCode } });
    if (coursesOverride) {
      for (const c of coursesOverride) {
        if (courseGroups.some(g => g.items.some(i => i.code.toUpperCase() === c.toUpperCase()))) {
          coursesDispatch({ type: 'ADD_COURSE', payload: { courseCode: c, student, countryCode: addressState.countryCode, provinceCode: addressState.provinceCode } });
        }
      }
    }

    if (billingAddressDefault) {
      billingAddressDispatch({ type: 'SET_BILLING_DISABLED', payload: billingAddressDefault === 'same' });
    }

    // we need to keep track of these here because we're going to run updateData twice and we need the latest value available
    let currentCountryCode = addressState.countryCode;
    let currentProvinceCode = addressState.provinceCode;
    let currentProvinces = addressState.provinces;
    let currentBillingCountryCode = billingAddressState.countryCode;
    let currentBillingProvinceCode = billingAddressState.provinceCode;
    let currentBillingProvinces = billingAddressState.provinces;

    const updateData = async ({ courses, studentAddress, billingAddress, paymentDay, paymentPlan, promoCode }: Data): Promise<void> => {
      // student address
      if (studentAddress.countryCode) {
        if (studentAddress.countryCode !== currentCountryCode && countries.some(c => c.code === studentAddress.countryCode)) { // we have a new country code
          if (needsProvince(studentAddress.countryCode)) {
            const provinces = await fetchProvinces(studentAddress.countryCode);
            if (!provinces || provinces.length === 0) {
              throw Error('Couldn\'t fetch provinces');
            }
            addressDispatch({ type: 'SET_COUNTRY_CODE_WITH_PROVINCES', payload: { countryCode: studentAddress.countryCode, provinces } });
            currentCountryCode = studentAddress.countryCode;
            currentProvinces = provinces;

            if (studentAddress.provinceCode && studentAddress.provinceCode !== currentProvinceCode && provinces.some(p => p.code === studentAddress.provinceCode)) {
              addressDispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode: studentAddress.provinceCode } });
              currentProvinceCode = studentAddress.provinceCode;
            }
          } else {
            addressDispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: studentAddress.countryCode } });
            currentCountryCode = studentAddress.countryCode;
          }
          if (needsPostal(studentAddress.countryCode)) {
            if (studentAddress.postalCode) {
              addressDispatch({ type: 'SET_POSTAL_CODE', payload: studentAddress.postalCode });
            }
          }
        } else { // country code didn't change
          if (needsProvince(currentCountryCode)) {
            if (studentAddress.provinceCode && studentAddress.provinceCode !== currentProvinceCode && currentProvinces.some(p => p.code === studentAddress.provinceCode)) {
              addressDispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode: studentAddress.provinceCode } });
              currentProvinceCode = studentAddress.provinceCode;
            }
          }
          if (needsPostal(currentCountryCode)) {
            if (studentAddress.postalCode) {
              addressDispatch({ type: 'SET_POSTAL_CODE', payload: studentAddress.postalCode });
            }
          }
        }
      }
      if (studentAddress.title && isTitle(studentAddress.title)) {
        addressDispatch({ type: 'SET_TITLE', payload: studentAddress.title });
      }
      if (studentAddress.firstName) {
        addressDispatch({ type: 'SET_FIRST_NAME', payload: studentAddress.firstName });
      }
      if (studentAddress.lastName) {
        addressDispatch({ type: 'SET_LAST_NAME', payload: studentAddress.lastName });
      }
      if (studentAddress.emailAddress) {
        addressDispatch({ type: 'SET_EMAIL_ADDRESS', payload: studentAddress.emailAddress });
      }
      if (studentAddress.telephoneNumber) {
        addressDispatch({ type: 'SET_TELEPHONE_NUMBER', payload: studentAddress.telephoneNumber });
      }
      if (studentAddress.address1) {
        addressDispatch({ type: 'SET_ADDRESS1', payload: studentAddress.address1 });
      }
      if (studentAddress.address2) {
        addressDispatch({ type: 'SET_ADDRESS2', payload: studentAddress.address2 });
      }
      if (studentAddress.city) {
        addressDispatch({ type: 'SET_CITY', payload: studentAddress.city });
      }

      // billing address
      if (billingAddress.sameAsShipping !== null) {
        billingAddressDispatch({ type: 'SET_BILLING_DISABLED', payload: billingAddress.sameAsShipping });
      }
      if (billingAddress.countryCode) {
        if (billingAddress.countryCode !== currentBillingCountryCode && countries.some(c => c.code === billingAddress.countryCode)) { // we have a new country code
          if (needsProvince(billingAddress.countryCode)) {
            const provinces = await fetchProvinces(billingAddress.countryCode);
            if (!provinces || provinces.length === 0) {
              throw Error('Couldn\'t fetch provinces');
            }
            billingAddressDispatch({ type: 'SET_BILLING_COUNTRY_CODE_WITH_PROVINCES', payload: { countryCode: billingAddress.countryCode, provinces } });
            currentBillingCountryCode = billingAddress.countryCode;
            currentBillingProvinces = provinces;

            if (billingAddress.provinceCode && billingAddress.provinceCode !== currentBillingProvinceCode && provinces.some(p => p.code === billingAddress.provinceCode)) {
              billingAddressDispatch({ type: 'SET_BILLING_PROVINCE_CODE', payload: { provinceCode: billingAddress.provinceCode } });
              currentBillingProvinceCode = billingAddress.provinceCode;
            }
          } else {
            billingAddressDispatch({ type: 'SET_BILLING_COUNTRY_CODE', payload: { countryCode: billingAddress.countryCode } });
            currentBillingCountryCode = billingAddress.countryCode;
          }
          if (needsPostal(billingAddress.countryCode)) {
            if (billingAddress.postalCode) {
              billingAddressDispatch({ type: 'SET_BILLING_POSTAL_CODE', payload: billingAddress.postalCode });
            }
          }
        } else { // country code didn't change
          if (needsProvince(currentBillingCountryCode)) {
            if (billingAddress.provinceCode && billingAddress.provinceCode !== currentBillingProvinceCode && currentBillingProvinces.some(p => p.code === billingAddress.provinceCode)) {
              billingAddressDispatch({ type: 'SET_BILLING_PROVINCE_CODE', payload: { provinceCode: billingAddress.provinceCode } });
              currentBillingProvinceCode = billingAddress.provinceCode;
            }
          }
          if (needsPostal(currentBillingCountryCode)) {
            if (billingAddress.postalCode) {
              billingAddressDispatch({ type: 'SET_BILLING_POSTAL_CODE', payload: billingAddress.postalCode });
            }
          }
        }
      }
      if (billingAddress.title && isTitle(billingAddress.title)) {
        billingAddressDispatch({ type: 'SET_BILLING_TITLE', payload: billingAddress.title });
      }
      if (billingAddress.firstName) {
        billingAddressDispatch({ type: 'SET_BILLING_FIRST_NAME', payload: billingAddress.firstName });
      }
      if (billingAddress.lastName) {
        billingAddressDispatch({ type: 'SET_BILLING_LAST_NAME', payload: billingAddress.lastName });
      }
      if (billingAddress.emailAddress) {
        billingAddressDispatch({ type: 'SET_BILLING_EMAIL_ADDRESS', payload: billingAddress.emailAddress });
      }
      if (billingAddress.telephoneNumber) {
        billingAddressDispatch({ type: 'SET_BILLING_TELEPHONE_NUMBER', payload: billingAddress.telephoneNumber });
      }
      if (billingAddress.address1) {
        billingAddressDispatch({ type: 'SET_BILLING_ADDRESS1', payload: billingAddress.address1 });
      }
      if (billingAddress.address2) {
        billingAddressDispatch({ type: 'SET_BILLING_ADDRESS2', payload: billingAddress.address2 });
      }
      if (billingAddress.city) {
        billingAddressDispatch({ type: 'SET_BILLING_CITY', payload: billingAddress.city });
      }

      if (courses?.length) {
        for (const courseCode of courses) {
          if (courseGroups.some(g => g.items.some(i => i.code.toUpperCase() === courseCode.toUpperCase()))) {
            coursesDispatch({ type: 'ADD_COURSE', payload: { courseCode, student, countryCode: addressState.countryCode, provinceCode: addressState.provinceCode } });
          }
        }
      }

      if (paymentPlan) {
        paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: paymentPlan });
      }

      if (paymentDay) {
        paymentDispatch({ type: 'SET_PAYMENT_DATE', payload: paymentDay });
      }

      if (promoCode) {
        metaDispatch({ type: 'SET_PROMO_CODE', payload: promoCode });
      }
    };

    const getQuerystringData = (): Data => {
      const courses = searchParams.getAll('c');

      const countryCode = searchParams.get('countryCode');
      const provinceCode = searchParams.get('provinceCode');
      const postalCode = searchParams.get('postalCode');
      const title = searchParams.get('title');
      const firstName = searchParams.get('firstName');
      const lastName = searchParams.get('lastName');
      const emailAddress = searchParams.get('emailAddress');
      const telephoneNumber = searchParams.get('telephoneNumber');
      const address1 = searchParams.get('address1');
      const address2 = searchParams.get('address2');
      const city = searchParams.get('city');

      const billingSameAsShippingString = searchParams.get('billingSameAsShipping');
      const billingSameAsShipping = billingSameAsShippingString === null ? null : billingSameAsShippingString === '1';
      const billingCountryCode = searchParams.get('countryCode');
      const billingProvinceCode = searchParams.get('provinceCode');
      const billingPostalCode = searchParams.get('postalCode');
      const billingTitle = searchParams.get('title');
      const billingFirstName = searchParams.get('firstName');
      const billingLastName = searchParams.get('lastName');
      const billingEmailAddress = searchParams.get('emailAddress');
      const billingTelephoneNumber = searchParams.get('telephoneNumber');
      const billingAddress1 = searchParams.get('address1');
      const billingAddress2 = searchParams.get('address2');
      const billingCity = searchParams.get('city');

      const paymentPlan = searchParams.get('paymentPlan');
      const paymentDayString = searchParams.get('paymentDay');
      const paymentDay = paymentDayString ? parseInt(paymentDayString, 10) : NaN;

      const promoCode = searchParams.get('promoCode');

      return {
        courses,
        studentAddress: { title, firstName, lastName, emailAddress, telephoneNumber, address1, address2, city, provinceCode, postalCode, countryCode },
        billingAddress: { sameAsShipping: billingSameAsShipping, title: billingTitle, firstName: billingFirstName, lastName: billingLastName, emailAddress: billingEmailAddress, telephoneNumber: billingTelephoneNumber, address1: billingAddress1, address2: billingAddress2, city: billingCity, provinceCode: billingProvinceCode, postalCode: billingPostalCode, countryCode: billingCountryCode },
        paymentPlan: isPaymentPlan(paymentPlan) ? paymentPlan : null,
        paymentDay: isNaN(paymentDay) ? null : paymentDay,
        promoCode,
      };
    };

    void (async (): Promise<void> => {
      const storedData = loadForm();
      if (storedData) {
        await updateData({ ...storedData, promoCode: null });
      }
      const querystringData = getQuerystringData();
      await updateData(querystringData);
    })();

  }, [ school, schoolVariant, student, courseGroups, coursesOverride, addressDispatch, billingAddressDispatch, coursesDispatch, metaDispatch, paymentDispatch, addressState.countryCode, addressState.provinceCode, addressState.provinces, billingAddressState.countryCode, billingAddressState.provinceCode, billingAddressState.provinces, countries, searchParams, billingAddressDefault ]);
};
