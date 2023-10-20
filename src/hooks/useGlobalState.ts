import type { Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';

import type { GlobalState } from '@/domain/globalState';
import { GlobalStateContext } from '@/providers/stateProvider';

export const useGlobalState = (): [ state: GlobalState, dispatch: Dispatch<SetStateAction<GlobalState>>] => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw Error('useState must be used inside of a StateProvider');
  }
  return context;
};
