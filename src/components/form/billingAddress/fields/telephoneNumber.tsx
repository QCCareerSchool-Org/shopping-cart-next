import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const TelephoneNumber: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_TELEPHONE_NUMBER', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.billingAddress.telephoneNumber) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}telephoneNumber`} className="form-label">Telephone Number</label>
      <input
        onChange={handleChange}
        value={billingAddressState.telephoneNumber}
        type="tel"
        name="telephoneNumber"
        id={`${id}telephoneNumber`}
        className={className}
        autoComplete="billing tel"
        autoCapitalize="off"
        autoCorrect="off"
        required
      />
    </>
  );
};
