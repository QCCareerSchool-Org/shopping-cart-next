import type { FC } from 'react';
import { lazy, Suspense } from 'react';

import { PaymentOptions } from './paymentOptions';
import { PlanResult } from './planResult';
import { Schedule } from './schedule';
import type { School } from '@/domain/school';
import { usePaymentState } from '@/hooks/usePaymentState';

const PromoCodeInput = lazy(async () => import('../promoCodeInput').then(m => ({ default: m.PromoCodeInput })));

type Props = {
  date: number;
  school: School;
  showPromoCodeInput: boolean;
};

const getReverse = (school: School): boolean => school === 'QC Makeup Academy';

export const TextPaymentPlans: FC<Props> = ({ date, school, showPromoCodeInput }) => {
  const paymentState = usePaymentState();

  const reverse = getReverse(school);

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-5 mb-4 mb-md-0">
        <PaymentOptions reverse={reverse} />
        {paymentState.plan === 'part' && <div className="mt-4"><Schedule /></div>}
        {showPromoCodeInput && <Suspense><PromoCodeInput date={date} school={school} /></Suspense>}
      </div>
      <div className="col-12 col-sm-10 col-md-7">
        <PlanResult />
      </div>
    </div>
  );
};
