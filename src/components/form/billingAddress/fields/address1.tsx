import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';

export const Address1: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_ADDRESS1', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}address1`} className="form-label">Address Line 1</label>
      <input
        onChange={handleChange}
        value={billingAddressState.address1}
        type="text"
        name="address1"
        id={`${id}address1`}
        className="form-control"
        maxLength={50}
        autoComplete="billing address-line1"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
