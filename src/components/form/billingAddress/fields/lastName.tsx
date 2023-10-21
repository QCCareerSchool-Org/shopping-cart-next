import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';

export const LastName: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_LAST_NAME', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}lastName`} className="form-label">Last Name</label>
      <input
        onChange={handleChange}
        value={billingAddressState.lastName}
        type="text"
        name="lastName"
        id={`${id}lastName`}
        className="form-control"
        autoComplete="billing family-name"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
