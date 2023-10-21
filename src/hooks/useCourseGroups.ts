import { useEffect } from 'react';

import { useCoursesDispatch } from './useCoursesDispatch';
import type { CourseGroup } from '@/domain/courseGroup';

export const useCourseGroups = (courseGroups: CourseGroup[], showMS: boolean): void => {
  const coursesDispatch = useCoursesDispatch();
  useEffect(() => {
    coursesDispatch({ type: 'SET_COURSE_GROUPS', payload: { courseGroups, showMS } });
  }, [ coursesDispatch, courseGroups, showMS ]);
};
