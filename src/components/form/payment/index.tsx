import type { FC } from 'react';
import { lazy, Suspense } from 'react';

import { Section } from '@/components/section';
import type { School } from '@/domain/school';

const VisualPaymentPlans = lazy(async () => import('./visualPaymentPlans').then(m => ({ default: m.VisualPaymentPlans })));
const TextPaymentPlans = lazy(async () => import('./textPaymentPlans').then(m => ({ default: m.TextPaymentPlans })));

type Props = {
  date: number;
  school: School;
  showPromoCodeInput: boolean;
  visualPaymentPlans: boolean;
};

export const Payment: FC<Props> = ({ date, school, showPromoCodeInput, visualPaymentPlans }) => {
  return (
    <Section>
      <h2 className="h1">Select a Payment Plan</h2>
      <Suspense>
        {visualPaymentPlans
          ? <VisualPaymentPlans date={date} school={school} />
          : <TextPaymentPlans date={date} school={school} showPromoCodeInput={showPromoCodeInput} />
        }
      </Suspense>
    </Section>
  );
};
