'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import type { OverridesAction, OverridesState } from '@/state/overrides';
import { initialOverridesState, overridesReducer } from '@/state/overrides';

export const OverridesStateContext = createContext<OverridesState | undefined>(undefined);
export const OverridesDispatchContext = createContext<Dispatch<OverridesAction> | undefined>(undefined);

export const OverridesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useReducer(overridesReducer, initialOverridesState);
  return (
    <OverridesStateContext.Provider value={state}>
      <OverridesDispatchContext.Provider value={dispatch}>
        {children}
      </OverridesDispatchContext.Provider>
    </OverridesStateContext.Provider>
  );
};
