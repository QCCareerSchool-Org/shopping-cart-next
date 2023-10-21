'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import type { MetaAction, MetaState } from '@/state/meta';
import { initialMetaState, metaReducer } from '@/state/meta';

export const MetaStateContext = createContext<MetaState | undefined>(undefined);
export const MetaDispatchContext = createContext<Dispatch<MetaAction> | undefined>(undefined);

export const MetaProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useReducer(metaReducer, initialMetaState);
  return (
    <MetaStateContext.Provider value={state}>
      <MetaDispatchContext.Provider value={dispatch}>
        {children}
      </MetaDispatchContext.Provider>
    </MetaStateContext.Provider>
  );
};
