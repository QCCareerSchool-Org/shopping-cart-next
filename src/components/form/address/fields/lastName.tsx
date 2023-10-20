import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';

export const LastName: FC = () => {
  const id = useId();
  const [ globalState, setGlobalState ] = useGlobalState();

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setGlobalState(s => ({ ...s, lastName: e.target.value }));
  };

  return (
    <>
      <label htmlFor={`${id}lastName`} className="form-label">Last Name</label>
      <input onChange={handleLastNameChange} value={globalState.address.lastName} type="text" name="lastName" id={`${id}lastName`} className="form-control" />
    </>
  );
};
