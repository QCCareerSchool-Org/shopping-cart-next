'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeProMakeupDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="danger">Select the <strong>Master Makeup Artistry</strong> course to get the <strong>Pro Makeup Workshop</strong> FREE</DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('MW')) {
    return <DynamicCourseAlert variant="warning">Don&apos;t forget to select your free <strong>Pro Makeup Workshop</strong></DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">You&apos;ll get the <strong>Pro Makeup Workshop</strong> FREE!</DynamicCourseAlert>;
};
