'use client';

import { useEffect, useRef } from 'react';

import { usePaymentState } from './usePaymentState';
import { usePriceState } from './usePriceState';
import type { School } from '@/domain/school';
import { getGoogleIds } from '@/lib/googleIds';
import { gaCartEvent } from '@/lib/gtag';
import type { PriceState } from '@/state/price';

/**
 * Sends add_to_cart and remove_from_cart events whenever the priced courses change
 *
 * Courses are compared between successive price results so that added courses are reported with
 * their new price and removed courses are reported with the price they had while in the cart.
 * The first price result is treated as the initial cart contents and is not reported.
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

    if (!enabled || !prev) {
      return;
    }

    const { analyticsId, adsId } = getGoogleIds(school);

    const prevCodes = new Set(prev.courses.map(c => c.code));
    const currentCodes = new Set(priceState.courses.map(c => c.code));

    const added = priceState.courses.filter(c => !prevCodes.has(c.code));
    const removed = prev.courses.filter(c => !currentCodes.has(c.code));

    if (removed.length) {
      gaCartEvent('remove_from_cart', [ analyticsId, adsId ], prev, removed, plan);
    }
    if (added.length) {
      gaCartEvent('add_to_cart', [ analyticsId, adsId ], priceState, added, plan);
    }
  }, [ school, enabled, priceState, plan ]);
};
