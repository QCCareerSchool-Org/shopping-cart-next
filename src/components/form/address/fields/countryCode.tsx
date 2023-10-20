import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';

export const CountryCode: FC = () => {
  const id = useId();
  const [ globalState, setGlobalState ] = useGlobalState();

  const handleCountryCodeChange: ChangeEventHandler<HTMLSelectElement> = e => {
    setGlobalState(s => ({ ...s, countryCode: e.target.value }));
  };

  return (
    <>
      <label htmlFor={`${id}countryCode`} className="form-label">Country</label>
      <select onChange={handleCountryCodeChange} value={globalState.countryCode} name="countryCode" id={`${id}countryCode`} className="form-control" required>
        {globalState.countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
      </select>
    </>
  );
};
