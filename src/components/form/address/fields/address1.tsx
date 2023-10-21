import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const Address1: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_ADDRESS1', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}address1`} className="form-label">Address Line 1</label>
      <input
        onChange={handleChange}
        value={addressState.address1}
        type="text"
        name="address1"
        id={`${id}address1`}
        className="form-control"
        maxLength={50}
        autoComplete="shipping address-line1"
        autoCapitalize="words"
        autoCorrect="off"
        required
      />
    </>
  );
};
