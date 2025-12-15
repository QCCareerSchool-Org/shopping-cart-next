import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import type { Country } from '@/domain/country';
import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';
import { useCountriesState } from '@/hooks/useCountriesState';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';
import { useErrorsState } from '@/hooks/useErrorsState';
import { useMetaState } from '@/hooks/useMetaState';
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
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();
  const { errors } = useErrorsState();
  const coursesDispatch = useCoursesDispatch();
  const metaState = useMetaState();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const countryCode = e.target.value.startsWith('-') ? e.target.value.slice(1) : e.target.value;
    if (needsProvince(countryCode)) {
      fetchProvinces(countryCode).then(provinces => {
        if (!provinces) {
          throw Error('No provinces returned');
        }
        addressDispatch({ type: 'SET_COUNTRY_CODE_WITH_PROVINCES', payload: { countryCode, provinces } });
        coursesDispatch({ type: 'RECALCULATE', payload: { student: metaState.student, countryCode, provinceCode: provinces[0].code } });
      }).catch((err: unknown) => {
        console.error(err);
      });
    } else {
      addressDispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode } });
      coursesDispatch({ type: 'RECALCULATE', payload: { student: metaState.student, countryCode, provinceCode: null } });
    }
  };

  let className = 'form-select';

  if (errors.studentAddress.countryCode) {
    className += ' is-invalid';
  }

  const value = popularCountries.some(c => c.code === addressState.countryCode) ? `-${addressState.countryCode}` : addressState.countryCode;

  return (
    <>
      <label htmlFor={`${id}countryCode`} className="form-label">Country</label>
      <select
        onChange={handleChange}
        value={value}
        name="countryCode"
        id={`${id}countryCode`}
        className={className}
        autoComplete="shipping country"
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
