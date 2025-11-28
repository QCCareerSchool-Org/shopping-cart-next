import type { FC } from 'react';

import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';
import { formatCurrency } from '@/lib/formatCurrency';
import { ordinal } from '@/lib/ordinal';
import type { PriceState } from '@/state/price';

export const Notes: FC = () => {
  const priceState = usePriceState();
  const paymentState = usePaymentState();

  if (!priceState) {
    return null;
  }

  if (priceState.courses.length > 0) {
    return (
      <>
        {paymentState.plan === 'full' && <FullPaymentSummary price={priceState} />}
        {paymentState.plan === 'part' && <PartPaymentSummary price={priceState} day={paymentState.day} />}
        <p>All prices are in {priceState.currency.name}.</p>
      </>
    );
  }
};

const FullPaymentSummary: FC<{ price: PriceState }> = ({ price }) => {
  if (!price) {
    return;
  }

  return (
    <p>
      I agree to pay <strong>{price.currency.symbol}{formatCurrency(price.plans.full.total)}</strong>{price.plans.full.discount > 0
        ? <span>&mdash;a savings of <strong>{price.currency.symbol}{formatCurrency(price.plans.full.discount)}!</strong></span>
        : <>.</>
      }
    </p>
  );
};

const PartPaymentSummary: FC<{ price: PriceState; day: number }> = ({ price, day }) => {
  if (!price) {
    return;
  }

  if (!price.plans.part) {
    return null;
  }

  return (
    <>
      <p>
        I agree to pay a deposit of <strong>{price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong> now
        and <u>{price.plans.part.installments} monthly installments</u> of <strong>{price.currency.symbol}{formatCurrency(price.plans.part.installmentSize)}</strong> each.
      </p>
      <p>
        Payments will be automatically charged to my card on the {ordinal(day)} of each month.{' '}
        {day >= 29 ? <span>If there are fewer than {day} days in a month, my payment will be charged on the last day of that month. </span> : null}
        The monthly payments will start on {nextDay(day)}.</p>
    </>
  );
};

const nextDay = (n: number): string => {
  const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const targetDate = new Date(); // start with today
  const interval = n - targetDate.getDate(); // the number of days between the true target and the current target

  if (interval < -7) {
    // add two months
    targetDate.setMonth(targetDate.getMonth() + 2);
    targetDate.setDate(targetDate.getDate() + interval);
  } else if (interval >= -7 && interval <= 24) {
    // add one month
    targetDate.setMonth(targetDate.getMonth() + 1);
    targetDate.setDate(targetDate.getDate() + interval);
  } else if (interval > 24) {
    // don't add any months
    targetDate.setDate(targetDate.getDate() + interval);
  }

  if (targetDate.getDate() !== n) { // went into the next month because the target month was too short
    targetDate.setDate(0); // set to the last day of the previous month
  }

  return `${months[targetDate.getMonth()]} ${targetDate.getDate()}`;
};
