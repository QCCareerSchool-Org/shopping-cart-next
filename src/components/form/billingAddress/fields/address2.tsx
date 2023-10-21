import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';

export const Address2: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_ADDRESS2', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}address2`} className="form-label">Address Line 2</label>
      <input
        onChange={handleChange}
        value={billingAddressState.address2}
        type="text"
        name="address2"
        id={`${id}address2`}
        className="form-control"
        maxLength={50}
        autoComplete="billing address-line2"
        autoCapitalize="words"
        autoCorrect="off"
      />
    </>
  );
};
