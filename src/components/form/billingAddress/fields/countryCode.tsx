import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import type { Country } from '@/domain/country';
import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useCountriesState } from '@/hooks/useCountriesState';
import { useErrorsState } from '@/hooks/useErrorsState';
import { fetchProvinces } from '@/lib/fetch';
import { needsProvince } from '@/lib/needProvince';

const popularCountries: Country[] = [
  { code: 'AU', name: 'Australia' },
  { code: 'CA', name: 'Canada' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
];

export const CountryCode: FC = () => {
  const id = useId();
  const countriesState = useCountriesState();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const countryCode = e.target.value.startsWith('-') ? e.target.value.slice(1) : e.target.value;
    if (needsProvince(countryCode)) {
      fetchProvinces(countryCode).then(provinces => {
        if (!provinces) {
          throw Error('No provinces returned');
        }
        billingAddressDispatch({ type: 'SET_BILLING_COUNTRY_CODE_WITH_PROVINCES', payload: { countryCode, provinces } });
      }).catch((err: unknown) => {
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

  const value = popularCountries.some(c => c.code === billingAddressState.countryCode) ? `-${billingAddressState.countryCode}` : billingAddressState.countryCode;

  return (
    <>
      <label htmlFor={`${id}countryCode`} className="form-label">Country</label>
      <select
        onChange={handleChange}
        value={value}
        name="countryCode"
        id={`${id}countryCode`}
        className={className}
        autoComplete="billing country"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      >
        {popularCountries.map(c => <option key={`-${c.code}`} value={`-${c.code}`}>{c.name}</option>)}
        <option>---</option>
        {countriesState.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
      </select>
    </>
  );
};
