import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useErrorsState } from '@/hooks/useErrorsState';
import { provinceState } from '@/lib/provinceState';
import { ucWords } from '@/lib/ucWords';

export const ProvinceCode: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const provinceCode = e.target.value;
    billingAddressDispatch({ type: 'SET_BILLING_PROVINCE_CODE', payload: { provinceCode } });
  };

  if (billingAddressState.provinceCode === null) {
    return null;
  }

  let className = 'form-select';

  if (errors.billingAddress.provinceCode) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}provinceCode`} className="form-label">{ucWords(provinceState(billingAddressState.countryCode))}</label>
      <select
        onChange={handleChange}
        value={billingAddressState.provinceCode}
        name="provinceCode"
        id={`${id}provinceCode`}
        className={className}
        autoComplete="billing address-level1"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      >
        {billingAddressState.provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
      </select>
    </>
  );
};
