import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { usePaymentDispatch } from '@/hooks/usePaymentDispatch';
import { usePaymentState } from '@/hooks/usePaymentState';

export const Part: FC = () => {
  const id = useId();
  const paymentState = usePaymentState();
  const paymentDispatch = usePaymentDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.checked) {
      paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
    }
  };

  return (
    <div className="form-check">
      <input type="radio" id={`${id}part`} className="form-check-input" name="paymentPlan" checked={paymentState.plan === 'part'} onChange={handleChange} />
      <label htmlFor={`${id}part`} className="form-check-label">
        Installment Plan<span id="savings-part" style={{ display: 'none' }}>—<span className="text-primary" id="savings-amount-part" /></span>
      </label>
    </div>
  );
};
