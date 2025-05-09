'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeProMakeupMasterclassDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="danger">Select the <strong>Master Makeup Artistry</strong> course to get the <strong>Pro Makeup Workshop</strong> FREE</DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('MW')) {
    return <DynamicCourseAlert variant="warning">Select <strong>Pro Makeup Workshop</strong> to get the 3-Part Masterclass FREE!</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">You'll get the <strong>Pro Makeup Workshop</strong> 3-part Masterclass FREE!</DynamicCourseAlert>;
};
