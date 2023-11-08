import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const FirstName: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_FIRST_NAME', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.billingAddress.firstName) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}firstName`} className="form-label">First Name</label>
      <input
        onChange={handleChange}
        value={billingAddressState.firstName}
        type="text"
        name="firstName"
        id={`${id}firstName`}
        className={className}
        maxLength={50}
        autoComplete="billing given-name"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
