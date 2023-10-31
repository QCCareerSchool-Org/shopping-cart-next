import type { ChangeEventHandler, FC } from 'react';
import { memo, useId } from 'react';

import { usePaymentDispatch } from '@/hooks/usePaymentDispatch';
import { usePaymentState } from '@/hooks/usePaymentState';
import { ordinal } from '@/lib/ordinal';

const days = new Array(31).fill(undefined).map((_, i) => i + 1);

export const Schedule: FC = memo(() => {
  const id = useId();
  const paymentDispatch = usePaymentDispatch();
  const { day } = usePaymentState();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      paymentDispatch({ type: 'SET_PAYMENT_DATE', payload: value });
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={`${id}paymentDay`} className="form-label">Processed on</label>
      <select id={`${id}paymentDay`} className="form-select" value={day} onChange={handleChange}>
        {days.map(i => (<option key={i} value={i}>The {ordinal(i)} of each month</option>))}
      </select>
    </div>
  );
});

Schedule.displayName = 'Schedule';
