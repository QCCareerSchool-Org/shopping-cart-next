import type { Dispatch } from 'react';
import { useContext } from 'react';

import { ErrorsDispatchContext } from '@/providers/errorsProvider';
import type { ErrorsAction } from '@/state/errors';

export const useErrorsDispatch = (): Dispatch<ErrorsAction> => {
  const context = useContext(ErrorsDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('useErrorsDispatch must be used inside of a ErrorsProvider');
  }
  return context;
};
