'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useAddressDispatch } from './useAddressDispatch';
import { useAddressState } from './useAddressState';
import { useCountriesState } from './useCountriesState';
import { useCoursesDispatch } from './useCoursesDispatch';
import { useMetaDispatch } from './useMetaDispatch';
import { usePaymentDispatch } from './usePaymentDispatch';
import { isPaymentPlan } from '@/domain/paymentPlan';
import { isTitle } from '@/domain/title';
import { fetchProvinces } from '@/lib/fetch';
import { needsProvince } from '@/lib/needProvince';
import { needsPostal } from '@/lib/needsPostal';

export const useQueryStringData = (internal: boolean): void => {
  const searchParams = useSearchParams();
  const countries = useCountriesState();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const coursesDispatch = useCoursesDispatch();
  const metaDispatch = useMetaDispatch();
  const paymentDispatch = usePaymentDispatch();

  /** makes sure we only run once */
  const alreadyRun = useRef(false);

  useEffect(() => {
    if (alreadyRun.current) {
      return;
    }

    alreadyRun.current = true;

    const updateData = async (): Promise<void> => {

      // country, province, postal code
      const countryCode = searchParams.get('countryCode');
      const provinceCode = searchParams.get('provinceCode');
      const postalCode = searchParams.get('postalCode');

      if (countryCode) {
        if (countryCode !== addressState.countryCode && countries.some(c => c.code === countryCode)) { // we have a new country code
          if (needsProvince(countryCode)) {
            const provinces = await fetchProvinces(countryCode);
            if (!provinces || provinces.length === 0) {
              throw Error('Couldn\'t fetch provinces');
            }
            addressDispatch({ type: 'SET_COUNTRY_CODE_WITH_PROVINCES', payload: { countryCode, provinces } });

            if (provinceCode && provinceCode !== addressState.provinceCode && provinces.some(p => p.code === provinceCode)) {
              addressDispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode } });
            }
          } else {
            addressDispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode } });
          }
          if (needsPostal(countryCode)) {
            if (postalCode) {
              addressDispatch({ type: 'SET_POSTAL_CODE', payload: postalCode });
            }
          }
        } else { // country code didn't change
          if (needsProvince(addressState.countryCode)) {
            if (provinceCode && provinceCode !== addressState.provinceCode && addressState.provinces.some(p => p.code === provinceCode)) {
              addressDispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode } });
            }
          }
          if (needsPostal(addressState.countryCode)) {
            if (postalCode) {
              addressDispatch({ type: 'SET_POSTAL_CODE', payload: postalCode });
            }
          }
        }
      }

      // title
      const title = searchParams.get('title');
      if (title && isTitle(title)) {
        addressDispatch({ type: 'SET_TITLE', payload: title });
      }

      // first name
      const firstName = searchParams.get('firstName');
      if (firstName) {
        addressDispatch({ type: 'SET_FIRST_NAME', payload: firstName });
      }

      // last name
      const lastName = searchParams.get('lastName');
      if (lastName) {
        addressDispatch({ type: 'SET_LAST_NAME', payload: lastName });
      }

      // email address
      const emailAddress = searchParams.get('emailAddress');
      if (emailAddress) {
        addressDispatch({ type: 'SET_EMAIL_ADDRESS', payload: emailAddress });
      }

      // telephone number
      const telephoneNumber = searchParams.get('telephoneNumber');
      if (telephoneNumber) {
        addressDispatch({ type: 'SET_TELEPHONE_NUMBER', payload: telephoneNumber });
      }

      // address first line
      const address1 = searchParams.get('address1');
      if (address1) {
        addressDispatch({ type: 'SET_ADDRESS1', payload: address1 });
      }

      // address second line
      const address2 = searchParams.get('address2');
      if (address2) {
        addressDispatch({ type: 'SET_ADDRESS2', payload: address2 });
      }

      // city
      const city = searchParams.get('city');
      if (city) {
        addressDispatch({ type: 'SET_CITY', payload: city });
      }

      // courses
      const courseCodes = searchParams.getAll('c');
      if (courseCodes.length) {
        console.log('clearing');
        coursesDispatch({ type: 'CLEAR_COURSES', payload: { internal } });
        for (const courseCode of courseCodes) {
          console.log('adding', courseCode);
          coursesDispatch({ type: 'ADD_COURSE', payload: { courseCode, internal } });
        }
      }

      // promo code
      const promoCode = searchParams.get('promoCode');
      if (promoCode) {
        metaDispatch({ type: 'SET_PROMO_CODE', payload: promoCode });
      }

      // payment plan
      const paymentPlan = searchParams.get('paymentPlan');
      if (paymentPlan && isPaymentPlan(paymentPlan)) {
        paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: paymentPlan });
      }
    };
    void updateData();
  }, [ addressDispatch, coursesDispatch, metaDispatch, paymentDispatch, addressState.countryCode, addressState.provinceCode, addressState.provinces, countries, searchParams, internal ]);
};
