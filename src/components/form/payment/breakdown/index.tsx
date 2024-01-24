import type { FC } from 'react';
import { useMemo } from 'react';

import { Full } from './full';
import styles from './index.module.css';
import { Part } from './part';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';

const freeShippingCourses = [ 'DG', 'MZ', 'SF', 'HS' ];

type Props = {
  discountName?: string;
};

export const Breakdown: FC<Props> = ({ discountName }) => {
  const priceState = usePriceState();
  const { selected } = useCoursesState();
  const paymentState = usePaymentState();

  const showFreeShippingMessage = useMemo(() => {
    return selected.some(c => freeShippingCourses.includes(c));
  }, [ selected ]);

  if (!priceState || priceState.courses.length === 0) {
    return;
  }

  return (
    <>
      <h3 className="text-center text-lg-end">{paymentState.plan === 'full' ? 'Pay in Full' : 'Installment Plan'}</h3>
      <table className={`${styles.table} table table-borderless table-sm w-auto mx-auto me-lg-0`}>
        <tbody>
          {paymentState.plan === 'full' ? <Full discountName={discountName} /> : <Part discountName={discountName} />}
        </tbody>
      </table>
      <p className="text-center text-lg-end">All prices are in {priceState.currency.name}.</p>
      {showFreeShippingMessage && <p className="text-center text-lg-end text-primary small">This purchase qualifies for free shipping.</p>}
    </>
  );
};
