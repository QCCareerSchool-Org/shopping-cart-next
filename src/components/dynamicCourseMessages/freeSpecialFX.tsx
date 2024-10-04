'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeSpecialFXDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="danger">Select the <strong>Master Makeup Artistry</strong> course to get the <strong>Special FX Makeup</strong> course FREE</DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('SF')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free <strong>Special FX Makeup</strong> course</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">You'll get the <strong>Special FX Makeup</strong> course FREE!</DynamicCourseAlert>;
};
