import type { FC } from 'react';
import { useMemo } from 'react';

import styles from './breakdown.module.css';
import { Full } from './full';
import { Part } from './part';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';

const freeShippingCourses = [ 'DG', 'I2', 'ST', 'LD', 'CC', 'FD', 'ED', 'MZ', 'SF', 'HS' ];

export const Breakdown: FC = () => {
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
      <h3 className="text-center text-lg-right">{paymentState.plan === 'full' ? 'Pay in Full' : 'Installment Plan'}</h3>
      <table className={`${styles.table} table table-borderless table-sm w-auto mx-auto mr-lg-0`}>
        <tbody>
          {paymentState.plan === 'full' ? <Full /> : <Part />}
        </tbody>
      </table>
      <p className="text-center text-lg-right">All prices are in {priceState.currency.name}.</p>
      {showFreeShippingMessage && <p className="text-center text-lg-right text-primary">This purchase qualifies for free shipping.</p>}
    </>
  );
};
