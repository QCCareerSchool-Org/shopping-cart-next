import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const City: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_CITY', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.studentAddress.city) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}city`} className="form-label">City</label>
      <input
        onChange={handleChange}
        value={addressState.city}
        type="text"
        name="city"
        id={`${id}city`}
        className={className}
        maxLength={50}
        autoComplete="shipping address-level2"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
