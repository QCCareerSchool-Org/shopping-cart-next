'use client';

import type { FC } from 'react';
import { lazy, Suspense } from 'react';

import { Section } from '@/components/section';
import type { School } from '@/domain/school';
import { usePriceState } from '@/hooks/usePriceState';

const VisualPaymentPlans = lazy(async () => import('./visualPaymentPlans').then(m => ({ default: m.VisualPaymentPlans })));
const TextPaymentPlans = lazy(async () => import('./textPaymentPlans').then(m => ({ default: m.TextPaymentPlans })));

type Props = {
  date: number;
  school: School;
  showPromoCodeInput: boolean;
  visualPaymentPlans: boolean;
  discountName?: string;
};

export const Payment: FC<Props> = ({ date, school, showPromoCodeInput, visualPaymentPlans, discountName }) => {
  const priceState = usePriceState();

  if (priceState && priceState.cost > 0 && priceState.plans.part.installmentSize === 0) {
    return null;
  }

  return (
    <Section className="paymentSection">
      <h2 className="h1">Select a Payment Plan</h2>
      <Suspense>
        {visualPaymentPlans
          ? <VisualPaymentPlans date={date} school={school} discountName={discountName} />
          : <TextPaymentPlans date={date} school={school} showPromoCodeInput={showPromoCodeInput} discountName={discountName} />
        }
      </Suspense>
    </Section>
  );
};
