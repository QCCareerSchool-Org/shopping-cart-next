import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';

export const City: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_CITY', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}city`} className="form-label">City</label>
      <input
        onChange={handleChange}
        value={billingAddressState.city}
        type="text"
        name="city"
        id={`${id}city`}
        className="form-control"
        maxLength={50}
        autoComplete="billing address-level2"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
