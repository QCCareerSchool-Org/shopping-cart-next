import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const City: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_CITY', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}city`} className="form-label">City</label>
      <input
        onChange={handleChange}
        value={addressState.city}
        type="text"
        name="city"
        id={`${id}city`}
        className="form-control"
        maxLength={50}
        autoComplete="shipping address-level2"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
