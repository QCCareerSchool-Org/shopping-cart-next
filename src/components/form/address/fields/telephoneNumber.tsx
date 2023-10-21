import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const TelephoneNumber: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    addressDispatch({ type: 'SET_TELEPHONE_NUMBER', payload: e.target.value });
  };

  return (
    <>
      <label htmlFor={`${id}telephoneNumber`} className="form-label">Telephone Number</label>
      <input
        onChange={handleChange}
        value={addressState.telephoneNumber}
        type="tel"
        name="telephoneNumber"
        id={`${id}telephoneNumber`}
        className="form-control"
        autoComplete="shipping tel"
        autoCapitalize="off"
        autoCorrect="off"
        required
      />
    </>
  );
};
