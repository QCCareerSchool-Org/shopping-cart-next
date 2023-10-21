import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';

export const FirstName: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_FIRST_NAME', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}firstName`} className="form-label">First Name</label>
      <input
        onChange={handleChange}
        value={billingAddressState.firstName}
        type="text"
        name="firstName"
        id={`${id}firstName`}
        className="form-control"
        maxLength={50}
        autoComplete="billing given-name"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
