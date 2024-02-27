'use client';

import { useEffect } from 'react';

import { useAddressState } from './useAddressState';
import { useCoursesState } from './useCoursesState';
import { useMetaState } from './useMetaState';
import { useOverridesDispatch } from './useOverridesDispatch';
import { useOverridesState } from './useOverridesState';
import { usePaymentDispatch } from './usePaymentDispatch';
import { usePriceDispatch } from './usePriceDispatch';
import type { School, SchoolVariant } from '@/domain/school';
import { fetchPrice } from '@/lib/fetch';
import type { PriceQuery } from '@/lib/fetch';

export const usePriceUpdater = (date: number, internal: boolean, school: School, schoolVariant?: SchoolVariant, promoCodeDefault?: string): void => {
  const addressState = useAddressState();
  const coursesState = useCoursesState();
  const metaState = useMetaState();
  const overridesState = useOverridesState();
  const priceDispatch = usePriceDispatch();
  const overridesDispatch = useOverridesDispatch();
  const paymentDispatch = usePaymentDispatch();

  useEffect(() => {
    if (!internal) {
      return;
    }

    const controller = new AbortController();

    const priceQuery: PriceQuery = {
      courses: coursesState.selected,
      countryCode: addressState.countryCode,
      provinceCode: addressState.provinceCode ?? undefined,
      options: {
        discountAll: metaState.student,
        studentDiscount: metaState.studentDiscount,
        withoutTools: metaState.withoutTools,
        school,
        schoolVariant,
        promoCode: metaState.promoCode || promoCodeDefault,
      },
    };
    if ((process.env.VERCEL_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && priceQuery.options) {
      priceQuery.options.dateOverride = new Date(date);
    }
    fetchPrice(priceQuery, controller).then(price => {
      if (price) {
        overridesDispatch({
          type: 'INITIALIZE_OVERRIDES',
          payload: {
            installments: Math.max(1, price.plans.part.originalInstallments),
            courses: price.courses.map(c => ({
              code: c.code,
              name: c.name,
              min: c.plans.part.originalDeposit,
              max: c.plans.part.total,
              default: c.plans.part.originalDeposit,
              value: c.plans.part.deposit,
            })),
          },
        });
      }
    }).catch(err => {
      console.error(err);
    });

    return () => controller.abort();
  }, [ date, internal, overridesDispatch, coursesState.selected, addressState.countryCode, addressState.provinceCode, metaState.student, metaState.studentDiscount, metaState.withoutTools, metaState.promoCode, school, schoolVariant, promoCodeDefault ]);

  useEffect(() => {
    const controller = new AbortController();
    const priceQuery: PriceQuery = {
      countryCode: addressState.countryCode,
      courses: coursesState.selected,
      options: {
        discountAll: metaState.student,
        studentDiscount: metaState.studentDiscount,
        withoutTools: metaState.withoutTools,
        school,
        schoolVariant,
        promoCode: metaState.promoCode || promoCodeDefault,
      },
    };
    if (addressState.provinceCode !== null) {
      priceQuery.provinceCode = addressState.provinceCode;
    }
    if (internal) {
      priceQuery.options = {
        ...priceQuery.options,
        installmentsOverride: Math.max(1, overridesState.installments),
        depositOverrides: overridesState.courses.reduce<{ [key: string]: number }>((prev, cur) => {
          prev[cur.code] = cur.value;
          return prev;
        }, {}),
        dateOverride: new Date(date),
      };
    }
    fetchPrice(priceQuery, controller).then(price => {
      if (price) {
        priceDispatch({ type: 'SET_PRICE', payload: price });
        if (price.plans.part.installmentSize === 0) {
          paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
        }
      }
    }).catch(err => {
      console.error(err);
    });
    return () => controller.abort();
  }, [ date, internal, priceDispatch, paymentDispatch, coursesState.selected, addressState.countryCode, addressState.provinceCode, metaState.student, metaState.studentDiscount, metaState.withoutTools, metaState.promoCode, school, schoolVariant, promoCodeDefault, overridesState ]);
};
