'use client';

import { useEffect } from 'react';

import { useAddressState } from './useAddressState';
import { useCoursesState } from './useCoursesState';
import { useMetaState } from './useMetaState';
import { usePriceDispatch } from './usePriceDispatch';
import type { School } from '@/domain/school';
import { fetchPrice } from '@/lib/fetch';
import type { PriceQuery } from '@/lib/fetch';

export const usePriceUpdater = (internal: boolean, school: School, promoCodeDefault?: string): void => {
  const addressState = useAddressState();
  const coursesState = useCoursesState();
  const metaState = useMetaState();
  const priceDispatch = usePriceDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const priceQuery: PriceQuery = {
      countryCode: addressState.countryCode,
      courses: coursesState.selected,
      options: {
        school,
        promoCode: metaState.promoCode || promoCodeDefault,
      },
    };
    if (addressState.provinceCode !== null) {
      priceQuery.provinceCode = addressState.provinceCode;
    }
    fetchPrice(priceQuery, controller).then(price => {
      if (!price) {
        throw Error('Unable to fetch price');
      }
      priceDispatch({ type: 'SET_PRICE', payload: price });
    }).catch(err => {
      console.error(err);
    });
    return () => controller.abort();
  }, [ priceDispatch, addressState.countryCode, addressState.provinceCode, coursesState.selected, metaState.promoCode, school, promoCodeDefault ]);
};
