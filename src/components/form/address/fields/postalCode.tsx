import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { postalZip } from '@/lib/postalZip';
import { ucWords } from '@/lib/ucWords';

export const PostalCode: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_POSTAL_CODE', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}postalCode`} className="form-label">{ucWords(postalZip(addressState.countryCode))}</label>
      <input
        onChange={handleChange}
        value={addressState.postalCode}
        type="text"
        name="postalCode"
        id={`${id}postalCode`}
        className="form-control"
        maxLength={50}
        autoComplete="shipping postal-code"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      />
    </>
  );
};
