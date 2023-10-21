import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const Address2: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_ADDRESS2', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}address2`} className="form-label">Address Line 2</label>
      <input
        onChange={handleChange}
        value={addressState.address2}
        type="text"
        name="address2"
        id={`${id}address2`}
        className="form-control"
        maxLength={50}
        autoComplete="shipping address-line2"
        autoCapitalize="words"
        autoCorrect="off"
      />
    </>
  );
};
