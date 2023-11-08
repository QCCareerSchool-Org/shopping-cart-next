import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const Address1: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_ADDRESS1', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.billingAddress.address1) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}address1`} className="form-label">Address Line 1</label>
      <input
        onChange={handleChange}
        value={billingAddressState.address1}
        type="text"
        name="address1"
        id={`${id}address1`}
        className={className}
        maxLength={50}
        autoComplete="billing address-line1"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
