import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';

export const EmailAddress: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_EMAIL_ADDRESS', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}emailAddress`} className="form-label">Email Address</label>
      <input
        onChange={handleChange}
        value={billingAddressState.emailAddress}
        type="email"
        name="emailAddress"
        id={`${id}emailAddress`}
        className="form-control"
        autoComplete="billing email"
        autoCapitalize="off"
        autoCorrect="off"
        required
      />
    </>
  );
};
