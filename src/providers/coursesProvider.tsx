'use client';

import type { Dispatch, FC, PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

import type { CoursesAction, CoursesState } from '@/state/courses';
import { coursesReducer, initialCoursesState } from '@/state/courses';

export const CoursesStateContext = createContext<CoursesState | undefined>(undefined);
export const CoursesDispatchContext = createContext<Dispatch<CoursesAction> | undefined>(undefined);

export const CoursesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useReducer(coursesReducer, initialCoursesState);
  return (
    <CoursesStateContext.Provider value={state}>
      <CoursesDispatchContext.Provider value={dispatch}>
        {children}
      </CoursesDispatchContext.Provider>
    </CoursesStateContext.Provider>
  );
};
