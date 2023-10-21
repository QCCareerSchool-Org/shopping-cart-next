import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const LastName: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_LAST_NAME', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}lastName`} className="form-label">Last Name</label>
      <input
        onChange={handleChange}
        value={addressState.lastName}
        type="text"
        name="lastName"
        id={`${id}lastName`}
        className="form-control"
        autoComplete="shipping family-name"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
