import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';

export const EmailAddress: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_EMAIL_ADDRESS', payload: e.target.value });
  };

  let className = 'form-control';

  if (errors.studentAddress.emailAddress) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}emailAddress`} className="form-label">Email Address</label>
      <input
        onChange={handleChange}
        value={addressState.emailAddress}
        type="email"
        name="emailAddress"
        id={`${id}emailAddress`}
        className={className}
        autoComplete="shipping email"
        autoCapitalize="off"
        autoCorrect="off"
        required
      />
    </>
  );
};
