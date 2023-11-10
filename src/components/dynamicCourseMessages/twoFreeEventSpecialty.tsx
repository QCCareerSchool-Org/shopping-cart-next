'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '@/lib/courses';

export const TwoFreeEventSpecialtyDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.some(c => isEventFoundationCourse(c))) {
    return <DynamicCourseAlert variant="danger">Select a foundation course to get two free specialty courses</DynamicCourseAlert>;
  }

  const specialtyCount = coursesState.selected.filter(c => isEventSpecialtyCourse(c)).length;

  if (specialtyCount === 0) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your two free specialty courses</DynamicCourseAlert>;
  }

  if (specialtyCount === 1) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your second free course</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">Free specialty courses selected!</DynamicCourseAlert>;
};
