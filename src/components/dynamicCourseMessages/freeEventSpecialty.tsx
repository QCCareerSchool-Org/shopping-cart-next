'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '@/lib/courses';

export const FreeEventSpecialtyDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.some(c => isEventFoundationCourse(c))) {
    return <DynamicCourseAlert variant="danger">Select a foundation course to get a free specialty course</DynamicCourseAlert>;
  }

  if (!coursesState.selected.some(c => isEventSpecialtyCourse(c))) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free specialty course</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">Free specialty course selected!</DynamicCourseAlert>;
};
