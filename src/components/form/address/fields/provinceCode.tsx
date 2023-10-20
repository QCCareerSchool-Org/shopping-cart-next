import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';

export const ProvinceCode: FC = () => {
  const id = useId();
  const [ globalState, setGlobalState ] = useGlobalState();

  const handleProvinceCodeChange: ChangeEventHandler<HTMLSelectElement> = e => {
    setGlobalState(s => ({ ...s, countryCode: e.target.value }));
  };

  if (globalState.address.provinceCode === null) {
    return null;
  }

  return (
    <>
      <label htmlFor={`${id}provinceCode`} className="form-label">Province / State</label>
      <select onChange={handleProvinceCodeChange} value={globalState.address.provinceCode} name="provinceCode" id={`${id}provinceCode`} className="form-control" required>
        {globalState.provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
      </select>
    </>
  );
};
