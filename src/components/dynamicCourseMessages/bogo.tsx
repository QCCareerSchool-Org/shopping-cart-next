'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const BogoDynamicCourseMessage: FC = () => {
  const coursesState = useCoursesState();
  const courseCount = coursesState.selected.length;
  if (courseCount >= 2) {
    return <DynamicCourseAlert variant="success">Free second course selected</DynamicCourseAlert>;
  }

  if (courseCount === 1) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free second course</DynamicCourseAlert>;
  }
};
