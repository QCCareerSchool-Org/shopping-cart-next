'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { isDesignCourse } from '@/lib/courses';

export const MasterClassDynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (!coursesState.selected.length) {
    return;
  }

  if (!coursesState.selected.includes('I2')) {
    return <DynamicCourseAlert variant="danger">Select <strong>Interior Decorating</strong> to get your second course free.</DynamicCourseAlert>;
  }

  if (!coursesState.selected.filter(c => isDesignCourse(c) && c !== 'I2').length) {
    return <DynamicCourseAlert variant="warning">Don't forget to select a second course for free.</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success"><strong>MASTERCLASS</strong> discount applied!</DynamicCourseAlert>;
};
