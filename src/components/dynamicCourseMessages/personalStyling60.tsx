'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const PersonalStyling60DynamicMessage: FC = () => {
  const coursesState = useCoursesState();

  if (coursesState.selected.includes('AM')) {
    return <DynamicCourseAlert variant="info"><strong>Note:</strong> The current promotion does not apply to the All-Access Program, which already offers the greatest overall value and maximum savings.</DynamicCourseAlert>;
  }

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('PF')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select <strong>Personal Styling</strong> at 60% off!</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">60% off <strong>Personal Styling</strong></DynamicCourseAlert>;
};
