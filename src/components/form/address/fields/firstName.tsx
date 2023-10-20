import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';

export const FirstName: FC = () => {
  const id = useId();
  const [ globalState, setGlobalState ] = useGlobalState();

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setGlobalState(s => ({ ...s, firstName: e.target.value }));
  };

  return (
    <>
      <label htmlFor={`${id}firstName`} className="form-label">First Name</label>
      <input onChange={handleFirstNameChange} value={globalState.firstName} type="text" name="firstName" id={`${id}firstName`} className="form-control" maxLength={50} required />
    </>
  );
};
