import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { usePaymentDispatch } from '@/hooks/usePaymentDispatch';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';
import { formatCurrency } from '@/lib/formatCurrency';

export const Full: FC = () => {
  const id = useId();
  const priceState = usePriceState();
  const paymentState = usePaymentState();
  const paymentDispatch = usePaymentDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.checked) {
      paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
    }
  };

  return (
    <div className="form-check">
      <input type="radio" id={`${id}full`} className="form-check-input" checked={paymentState.plan === 'full'} onChange={handleChange} />
      <label htmlFor={`${id}full`} className="form-check-label">
        Pay in Full{priceState?.plans.full.discount ? <span>—<span className="text-primary">Save {priceState?.currency.symbol + formatCurrency(priceState.plans.full.discount)}</span></span> : null}
      </label>
    </div>
  );
};
