'use client';

import type { FC } from 'react';
import { lazy, Suspense } from 'react';

import { Section } from '@/components/section';
import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { usePriceState } from '@/hooks/usePriceState';

const VisualPaymentPlans = lazy(async () => import('./visualPaymentPlans').then(m => ({ default: m.VisualPaymentPlans })));
const TextPaymentPlans = lazy(async () => import('./textPaymentPlans').then(m => ({ default: m.TextPaymentPlans })));

interface Props {
  date: number;
  school: School;
  showPromoCodeInput: boolean;
  visualPaymentPlans: boolean;
  discountName?: string;
  courseGroups: CourseGroup[];
}

export const Payment: FC<Props> = ({ date, school, showPromoCodeInput, visualPaymentPlans, discountName, courseGroups }) => {
  const priceState = usePriceState();
  const plansEnabled = priceState && priceState.courses.every(c => c.plans.part);

  return (
    <Section className="paymentSection">
      <h2 className="h1">{plansEnabled ? 'Select a Payment Plan' : 'Payment Plan'}</h2>
      <Suspense>
        {visualPaymentPlans
          ? <VisualPaymentPlans date={date} school={school} discountName={discountName} courseGroups={courseGroups} />
          : <TextPaymentPlans date={date} school={school} showPromoCodeInput={showPromoCodeInput} discountName={discountName} courseGroups={courseGroups} />
        }
      </Suspense>
    </Section>
  );
};
