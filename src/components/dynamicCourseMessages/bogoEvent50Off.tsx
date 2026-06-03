'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const BogoEvent50Off: FC = () => {
  const coursesState = useCoursesState();
  const courseCount = coursesState.selected.length;

  if (courseCount === 0) {
    return null;
  }

  if (courseCount >= 2) {
    return <DynamicCourseAlert variant="success">Save 50% on each additional course of equal or lesser value</DynamicCourseAlert>;
  }

  if (courseCount === 1) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free second course</DynamicCourseAlert>;
  }
};
