'use client';

import type { FC } from 'react';

import { AAPDynamicCourseAlert, DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { isEventFoundationCourse } from '@/lib/courses';

export const FreeEventCourseDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (coursesState.selected.includes('AA')) {
    return <AAPDynamicCourseAlert />;
  }

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.some(c => isEventFoundationCourse(c))) {
    return <DynamicCourseAlert variant="danger">Select a foundation course to get another course free</DynamicCourseAlert>;
  }

  if (coursesState.selected.length < 2) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free course</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">Free course selected!</DynamicCourseAlert>;
};
