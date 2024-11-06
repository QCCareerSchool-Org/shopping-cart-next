'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeDaycareMessage: FC = () => {
  const coursesState = useCoursesState();
  const courseCount = coursesState.selected.length;

  if (courseCount === 0) {
    return;
  }

  if (courseCount === 1 && coursesState.selected[0] === 'DD') {
    return <DynamicCourseAlert variant="warning">Enroll in any other course to get <strong>Dog Daycare FREE!</strong></DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('DD')) {
    return <DynamicCourseAlert variant="info">Don't forget to select your <strong>FREE Dog Daycare</strong> course!</DynamicCourseAlert>;
  }
};
