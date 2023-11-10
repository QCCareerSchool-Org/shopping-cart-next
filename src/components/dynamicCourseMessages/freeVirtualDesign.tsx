'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeVirtualDesignDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('VD')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free <strong>Virtual Design</strong> training</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">Free <strong>Virtual Design</strong> training selected</DynamicCourseAlert>;
};
