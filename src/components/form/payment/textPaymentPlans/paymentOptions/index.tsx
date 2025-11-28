import type { FC } from 'react';
import { memo } from 'react';

import { Full } from './full';
import { Part } from './part';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  reverse: boolean;
};

export const PaymentOptions: FC<Props> = memo(({ reverse }) => {
  const priceState = usePriceState();

  if (!priceState) {
    return;
  }

  if (priceState.courses.some(c => !c.plans.part)) {
    return;
  }

  return (
    <>
      <h3>Payment Options</h3>
      {reverse ?
        (
          <>
            <Part />
            <div className="mt-2" />
            <Full />
          </>
        )
        : (
          <>
            <Full />
            <div className="mt-2" />
            <Part />
          </>
        )
      }
    </>
  );
});

PaymentOptions.displayName = 'PaymentOptions';
