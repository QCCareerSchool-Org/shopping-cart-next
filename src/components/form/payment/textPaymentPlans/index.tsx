import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Card, CardBody } from 'react-bootstrap';

import { Breakdown } from '../breakdown';
import { PaymentOptions } from './paymentOptions';
import { Schedule } from './schedule';
import { CanadaTaxCredits } from '@/components/canadaTaxCredits';
import type { CourseGroup } from '@/domain/courseGroup';
import type { Promo } from '@/domain/promo';
import type { School } from '@/domain/school';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';
import type { PriceState } from '@/state/price';

const PromoCodeInput = lazy(async () => import('../promoCodeInput').then(m => ({ default: m.PromoCodeInput })));

interface Props {
  date: number;
  school: School;
  showPromoCodeInput: boolean;
  promosOverride?: (date: number, price: PriceState, school: School, student: boolean) => Promo[];
  discountName?: string;
  courseGroups: CourseGroup[];
  hideTaxRefund?: boolean;
}

const getReverse = (school: School): boolean => school === 'QC Makeup Academy';

export const TextPaymentPlans: FC<Props> = ({ date, school, showPromoCodeInput, promosOverride, discountName, courseGroups, hideTaxRefund }) => {
  const paymentState = usePaymentState();
  const priceState = usePriceState();

  const reverse = getReverse(school);

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-5 mb-4 mb-md-0">
        <PaymentOptions reverse={reverse} />
        {paymentState.plan === 'part' && <div className="mt-4"><Schedule /></div>}
        {showPromoCodeInput && <Suspense><PromoCodeInput date={date} school={school} promosOverride={promosOverride} /></Suspense>}
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
              {!hideTaxRefund && priceState?.countryCode === 'CA' && (
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
