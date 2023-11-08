import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const EmailAddress: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_EMAIL_ADDRESS', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.billingAddress.emailAddress) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}emailAddress`} className="form-label">Email Address</label>
      <input
        onChange={handleChange}
        value={billingAddressState.emailAddress}
        type="email"
        name="emailAddress"
        id={`${id}emailAddress`}
        className={className}
        autoComplete="billing email"
        autoCapitalize="off"
        autoCorrect="off"
        required
      />
    </>
  );
};
