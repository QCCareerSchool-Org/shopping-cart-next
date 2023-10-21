import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const EmailAddress: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_EMAIL_ADDRESS', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}emailAddress`} className="form-label">Email Address</label>
      <input
        onChange={handleChange}
        value={addressState.emailAddress}
        type="email"
        name="emailAddress"
        id={`${id}emailAddress`}
        className="form-control"
        autoComplete="shipping email"
        autoCapitalize="off"
        autoCorrect="off"
        required
      />
    </>
  );
};
