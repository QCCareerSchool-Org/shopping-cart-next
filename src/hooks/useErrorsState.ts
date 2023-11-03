import { useContext } from 'react';

import { ErrorsStateContext } from '@/providers/errorsProvider';
import type { ErrorsState } from '@/state/errors';

export const useErrorsState = (): ErrorsState => {
  const context = useContext(ErrorsStateContext);
  if (typeof context === 'undefined') {
    throw Error('useErrorsState must be used inside of a ErrorsProvider');
  }
  return context;
};
