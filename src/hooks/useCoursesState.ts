import { useContext } from 'react';

import { CoursesStateContext } from '@/providers/coursesProvider';
import type { CoursesState } from '@/state/courses';

export const useCoursesState = (): CoursesState => {
  const context = useContext(CoursesStateContext);
  if (typeof context === 'undefined') {
    throw Error('useCoursesState must be used inside of a CoursesProvider');
  }
  return context;
};
