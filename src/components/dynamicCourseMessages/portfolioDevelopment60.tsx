'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const PortfolioDevelopment60DynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('PW')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select <strong>Portfolio Development</strong> at 60% off!</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">60% off <strong>Portfolio Development</strong></DynamicCourseAlert>;
};
