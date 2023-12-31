import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';
import { provinceState } from '@/lib/provinceState';
import { ucWords } from '@/lib/ucWords';

export const ProvinceCode: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const provinceCode = e.target.value;
    addressDispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode } });
  };

  if (addressState.provinceCode === null) {
    return null;
  }

  let className = 'form-select';

  if (errors.studentAddress.provinceCode) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}provinceCode`} className="form-label">{ucWords(provinceState(addressState.countryCode))}</label>
      <select
        onChange={handleChange}
        value={addressState.provinceCode}
        name="provinceCode"
        id={`${id}provinceCode`}
        className={className}
        autoComplete="shipping address-level1"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      >
        {addressState.provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
      </select>
    </>
  );
};
