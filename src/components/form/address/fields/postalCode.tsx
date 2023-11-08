import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';
import { postalZip } from '@/lib/postalZip';
import { ucWords } from '@/lib/ucWords';

export const PostalCode: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_POSTAL_CODE', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.studentAddress.postalCode) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}postalCode`} className="form-label">{ucWords(postalZip(addressState.countryCode))}</label>
      <input
        onChange={handleChange}
        value={addressState.postalCode}
        type="text"
        name="postalCode"
        id={`${id}postalCode`}
        className={className}
        maxLength={50}
        autoComplete="shipping postal-code"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      />
    </>
  );
};
