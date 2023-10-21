import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const FirstName: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_FIRST_NAME', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}firstName`} className="form-label">First Name</label>
      <input
        onChange={handleChange}
        value={addressState.firstName}
        type="text"
        name="firstName"
        id={`${id}firstName`}
        className="form-control"
        maxLength={50}
        autoComplete="shipping given-name"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
