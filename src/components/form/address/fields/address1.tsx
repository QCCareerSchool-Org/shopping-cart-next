import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const Address1: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_ADDRESS1', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.studentAddress.address1) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}address1`} className="form-label">Address Line 1</label>
      <input
        onChange={handleChange}
        value={addressState.address1}
        type="text"
        name="address1"
        id={`${id}address1`}
        className={className}
        maxLength={50}
        autoComplete="shipping address-line1"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
