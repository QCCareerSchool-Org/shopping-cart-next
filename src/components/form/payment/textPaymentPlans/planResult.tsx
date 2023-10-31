import type { FC } from 'react';
import { Card, CardBody } from 'react-bootstrap';

import { Breakdown } from '../breakdown';
import { CanadaTaxCredits } from '../canadaTaxCredits';
import { usePriceState } from '@/hooks/usePriceState';

export const PlanResult: FC = () => {
  const priceState = usePriceState();

  if (!priceState) {
    return;
  }

  if (priceState.courses.length === 0) {
    return;
  }

  return (
    <div className="d-flex justify-content-center justify-content-md-end">
      <div>
        <Card className="d-inline-block w-auto">
          <CardBody className="pb-0">
            <Breakdown />
          </CardBody>
        </Card>
        {priceState.countryCode === 'CA' && (
          <div className="mt-4" style={{ maxWidth: 280 }}>
            <CanadaTaxCredits />
          </div>
        )}
      </div>
    </div>
  );
};
