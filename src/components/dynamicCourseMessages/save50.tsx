'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const Save50CourseMessage: FC = () => {
  const coursesState = useCoursesState();
  const courseCount = coursesState.selected.length;
  if (courseCount === 1) {
    return (
      <DynamicCourseAlert variant="info"><strong>Save 50%</strong> on each additional course of equal or lesser value</DynamicCourseAlert>
    );
  }
};
