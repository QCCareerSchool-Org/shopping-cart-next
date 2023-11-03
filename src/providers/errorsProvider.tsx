'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import type { ErrorsAction, ErrorsState } from '@/state/errors';
import { errorsReducer, initialErrorsState } from '@/state/errors';

export const ErrorsStateContext = createContext<ErrorsState | undefined>(undefined);
export const ErrorsDispatchContext = createContext<Dispatch<ErrorsAction> | undefined>(undefined);

export const ErrorsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useReducer(errorsReducer, initialErrorsState);
  return (
    <ErrorsStateContext.Provider value={state}>
      <ErrorsDispatchContext.Provider value={dispatch}>
        {children}
      </ErrorsDispatchContext.Provider>
    </ErrorsStateContext.Provider>
  );
};
