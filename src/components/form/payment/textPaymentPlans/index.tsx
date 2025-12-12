import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Card, CardBody } from 'react-bootstrap';

import { Breakdown } from '../breakdown';
import { PaymentOptions } from './paymentOptions';
import { Schedule } from './schedule';
import { CanadaTaxCredits } from '@/components/canadaTaxCredits';
import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';

const PromoCodeInput = lazy(async () => import('../promoCodeInput').then(m => ({ default: m.PromoCodeInput })));

interface Props {
  date: number;
  school: School;
  showPromoCodeInput: boolean;
  discountName?: string;
  courseGroups: CourseGroup[];
}

const getReverse = (school: School): boolean => school === 'QC Makeup Academy';

export const TextPaymentPlans: FC<Props> = ({ date, school, showPromoCodeInput, discountName, courseGroups }) => {
  const paymentState = usePaymentState();
  const priceState = usePriceState();

  const reverse = getReverse(school);

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-5 mb-4 mb-md-0">
        <PaymentOptions reverse={reverse} />
        {paymentState.plan === 'part' && <div className="mt-4"><Schedule /></div>}
        {showPromoCodeInput && <Suspense><PromoCodeInput date={date} school={school} /></Suspense>}
      </div>
      <div className="col-12 col-sm-10 col-md-7">
        {priceState?.courses && priceState.courses.length > 0 && (
          <div className="d-flex justify-content-center justify-content-md-end">
            <div>
              <Card className="d-inline-block w-auto">
                <CardBody className="pb-0">
                  <Breakdown discountName={discountName} courseGroups={courseGroups} />
                </CardBody>
              </Card>
              {priceState?.countryCode === 'CA' && (
                <div className="mt-4" style={{ maxWidth: 308 }}>
                  <CanadaTaxCredits />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
