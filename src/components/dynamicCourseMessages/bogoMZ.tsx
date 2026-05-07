'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const BogoMZ: FC = () => {
  const coursesState = useCoursesState();

  if (coursesState.selected.includes('AM')) {
    return <DynamicCourseAlert variant="info"><strong>Note:</strong> The current promotion does not apply to the All-Access Program, which already offers the greatest overall value and maximum savings.</DynamicCourseAlert>;
  }

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="danger">Select the <strong>Master Makeup Artistry</strong> course to get any other course free</DynamicCourseAlert>;
  }

  if (coursesState.selected.length < 2) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free second course</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">You're getting your second course FREE!</DynamicCourseAlert>;
};
