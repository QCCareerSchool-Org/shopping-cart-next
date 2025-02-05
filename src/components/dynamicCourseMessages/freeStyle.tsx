'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeStyleDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="danger">Select the <strong>Master Makeup Artistry</strong> course to get the <strong>Pro Makeup Workshop</strong> FREE</DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('PF')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free <strong>Personal Styling</strong> course</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">You'll get the <strong>Personal Styling</strong> course FREE!</DynamicCourseAlert>;
};
