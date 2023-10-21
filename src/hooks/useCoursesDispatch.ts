import type { Dispatch } from 'react';
import { useContext } from 'react';

import { CoursesDispatchContext } from '@/providers/coursesProvider';
import type { CoursesAction } from '@/state/courses';

export const useCoursesDispatch = (): Dispatch<CoursesAction> => {
  const context = useContext(CoursesDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('useCoursesDispatch must be used inside of a CoursesProvider');
  }
  return context;
};
