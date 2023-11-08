import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { useCountriesState } from '@/hooks/useCountriesState';
import { useErrorsState } from '@/hooks/useErrorsState';
import { fetchProvinces } from '@/lib/fetch';
import { needsProvince } from '@/lib/needProvince';

export const CountryCode: FC = () => {
  const id = useId();
  const countriesState = useCountriesState();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const { errors } = useErrorsState();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const countryCode = e.target.value;
    if (needsProvince(countryCode)) {
      fetchProvinces(countryCode).then(provinces => {
        if (!provinces) {
          throw Error('No provinces returned');
        }
        addressDispatch({ type: 'SET_COUNTRY_CODE_WITH_PROVINCES', payload: { countryCode, provinces } });
      }).catch(err => {
        console.error(err);
      });
    } else {
      addressDispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode } });
    }
  };

  let className = 'form-select';

  if (errors.studentAddress.countryCode) {
    className += ' is-invalid';
  }

  return (
    <>
      <label htmlFor={`${id}countryCode`} className="form-label">Country</label>
      <select
        onChange={handleChange}
        value={addressState.countryCode}
        name="countryCode"
        id={`${id}countryCode`}
        className={className}
        autoComplete="shipping country"
        autoCapitalize="characters"
        autoCorrect="off"
        required
      >
        {countriesState.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
      </select>
    </>
  );
};
