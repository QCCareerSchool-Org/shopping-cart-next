import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const LastName: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_LAST_NAME', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.billingAddress.lastName) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}lastName`} className="form-label">Last Name</label>
      <input
        onChange={handleChange}
        value={billingAddressState.lastName}
        type="text"
        name="lastName"
        id={`${id}lastName`}
        className={className}
        autoComplete="billing family-name"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
