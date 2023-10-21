import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { postalZip } from '@/lib/postalZip';
import { ucWords } from '@/lib/ucWords';

export const PostalCode: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_POSTAL_CODE', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}postalCode`} className="form-label">{ucWords(postalZip(billingAddressState.countryCode))}</label>
      <input
        onChange={handleChange}
        value={billingAddressState.postalCode}
        type="text"
        name="postalCode"
        id={`${id}postalCode`}
        className="form-control"
        maxLength={50}
        autoComplete="billing postal-code"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      />
    </>
  );
};
