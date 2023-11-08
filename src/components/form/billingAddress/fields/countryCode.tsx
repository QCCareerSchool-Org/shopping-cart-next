import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useCountriesState } from '@/hooks/useCountriesState';
import { useErrorsState } from '@/hooks/useErrorsState';
import { fetchProvinces } from '@/lib/fetch';
import { needsProvince } from '@/lib/needProvince';

export const CountryCode: FC = () => {
  const id = useId();
  const countriesState = useCountriesState();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const countryCode = e.target.value;
    if (needsProvince(countryCode)) {
      fetchProvinces(countryCode).then(provinces => {
        if (!provinces) {
          throw Error('No provinces returned');
        }
        billingAddressDispatch({ type: 'SET_BILLING_COUNTRY_CODE_WITH_PROVINCES', payload: { countryCode, provinces } });
      }).catch(err => {
        console.error(err);
      });
    } else {
      billingAddressDispatch({ type: 'SET_BILLING_COUNTRY_CODE', payload: { countryCode } });
    }
  };

  let className = 'form-select';

  if (errors.billingAddress.countryCode) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}countryCode`} className="form-label">Country</label>
      <select
        onChange={handleChange}
        value={billingAddressState.countryCode}
        name="countryCode"
        id={`${id}countryCode`}
        className={className}
        autoComplete="billing country"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      >
        {countriesState.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
      </select>
    </>
  );
};
