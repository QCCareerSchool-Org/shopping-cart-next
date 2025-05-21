'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeVirtualEventDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('VE')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free <strong>Virtual Event</strong> training</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">Free <strong>Virtual Event</strong> training selected</DynamicCourseAlert>;
};
