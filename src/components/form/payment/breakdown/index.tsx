import type { FC } from 'react';

import { Full } from './full';
import styles from './index.module.css';
import { Part } from './part';
import type { CourseGroup } from '@/domain/courseGroup';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  discountName?: string;
  courseGroups: CourseGroup[];
}

const countriesWithShipping = [ 'MZ', 'DG' ];

export const Breakdown: FC<Props> = ({ discountName, courseGroups }) => {
  const priceState = usePriceState();
  const { selected } = useCoursesState();
  const addressState = useAddressState();
  const paymentState = usePaymentState();

  const showShippingMessage = selected.some(c => countriesWithShipping.includes(c));

  const freeShipping = addressState.countryCode === 'US'
    || addressState.countryCode === 'CA'
    || addressState.countryCode === 'AU'
    || addressState.countryCode === 'NZ'
    || addressState.countryCode === 'GB';

  if (!priceState || priceState.courses.length === 0) {
    return;
  }

  return (
    <>
      <h3 className="text-center text-lg-end">{paymentState.plan === 'full' ? 'Pay in Full' : 'Installment Plan'}</h3>
      <table className={`${styles.table} table table-borderless table-sm w-auto mx-auto me-lg-0`}>
        <tbody>
          {paymentState.plan === 'full' ? <Full discountName={discountName} courseGroups={courseGroups} /> : <Part discountName={discountName} courseGroups={courseGroups} />}
        </tbody>
      </table>
      <p className="text-center text-lg-end">All prices are in {priceState.currency.name}.</p>
      {showShippingMessage && (
        <>
          {freeShipping
            ? <p className="text-center text-lg-end text-primary small">This purchase qualifies for free shipping.</p>
            : <p className="text-center text-lg-end small">International shipping fees, tariffs, and delivery restrictions may apply.</p>
          }
        </>
      )}
    </>
  );
};
