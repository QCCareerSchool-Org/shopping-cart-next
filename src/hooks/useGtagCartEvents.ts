'use client';

import { useEffect, useRef } from 'react';

import { usePaymentState } from './usePaymentState';
import { usePriceState } from './usePriceState';
import type { School } from '@/domain/school';
import { getGoogleIds } from '@/lib/googleIds';
import { gaAddToCart, gaRemoveFromCart } from '@/lib/gtag';
import type { PriceState } from '@/state/price';

/**
 * Sends add_to_cart and remove_from_cart events whenever the priced courses change
 *
 * Courses are compared between successive price results so that added courses are reported with
 * their new price and removed courses are reported with the price they had while in the cart.
 * The cart is treated as starting empty, so courses that are preselected (from the querystring or
 * a saved form) are reported as added. Whether they arrive in the first price result or a later one
 * depends on timing in useInitialData, so treating them consistently avoids racing it.
 */
export const useGtagCartEvents = (school: School, enabled: boolean): void => {
  const priceState = usePriceState();
  const { plan } = usePaymentState();
  const previousPrice = useRef<PriceState>(null);

  useEffect(() => {
    if (!priceState) {
      return;
    }

    const prev = previousPrice.current;
    previousPrice.current = priceState;

    if (!enabled) {
      return;
    }

    const googleIds = getGoogleIds(school);

    const prevCourses = prev?.courses ?? [];
    const prevCodes = new Set(prevCourses.map(c => c.code));
    const currentCodes = new Set(priceState.courses.map(c => c.code));

    const added = priceState.courses.filter(c => !prevCodes.has(c.code));
    const removed = prevCourses.filter(c => !currentCodes.has(c.code));

    if (prev && removed.length) {
      gaRemoveFromCart(googleIds, prev, removed, plan);
    }
    if (added.length) {
      gaAddToCart(googleIds, priceState, added, plan);
    }
  }, [ school, enabled, priceState, plan ]);
};
