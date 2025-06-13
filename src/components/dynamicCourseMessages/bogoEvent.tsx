'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { isEventFoundationCourse } from '@/lib/courses';

export const BogoEventDynamicCourseMessage: FC = () => {
  const coursesState = useCoursesState();
  const courseCount = coursesState.selected.length;

  if (courseCount === 0) {
    return null;
  }

  if (!coursesState.selected.some(c => isEventFoundationCourse(c))) {
    return <DynamicCourseAlert variant="warning">Enroll in a foundation course to get any other course free</DynamicCourseAlert>;
  }

  if (courseCount >= 2) {
    return <DynamicCourseAlert variant="success">Free second course selected</DynamicCourseAlert>;
  }

  if (courseCount === 1) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free second course</DynamicCourseAlert>;
  }
};
