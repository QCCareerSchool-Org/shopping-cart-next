'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const FreeEBVDDynamicCourseMessage: FC = () => {
  const coursesState = useCoursesState();

  if (coursesState.selected.includes('I2') && (!coursesState.selected.includes('DB') || !coursesState.selected.includes('VD'))) {
    return <DynamicCourseAlert variant="warning">Accelerate Your Design Business and Virtual Design are included with this course. Don't forget to select your free courses!</DynamicCourseAlert>;
  }
};
