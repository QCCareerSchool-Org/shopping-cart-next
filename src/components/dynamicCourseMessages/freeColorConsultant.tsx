'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePriceState } from '@/hooks/usePriceState';

export const FreeColorConsultantMessage: FC = () => {
  const priceState = usePriceState();
  const coursesState = useCoursesState();

  const ccPrice = priceState?.courses.find(c => c.code === 'CC');

  // no courses selected
  if (coursesState.selected.length === 0) {
    return null;
  }

  // at least one course selected, but none of the courses are CC
  if (typeof ccPrice === 'undefined') {
    return <DynamicCourseAlert variant="warning">Get the <strong>Color Consultant Course</strong> FREE when you also select another course of greater or equal value!</DynamicCourseAlert>;
  }

  // CC and at least one other course selected and at least one of the other courses costs more or the same as CC
  if (priceState?.courses.some(c => c.code !== 'CC' && c.cost >= ccPrice.cost)) {
    return <DynamicCourseAlert variant="success">You're getting the <strong>Color Consultant Course</strong> FREE!</DynamicCourseAlert>;
  }

  // CC and at least one other course selected but none of the other courses cost more or the same as CC
  return <DynamicCourseAlert variant="danger">Select another course of greater or equal value in order to get the <strong>Color Consultant Course</strong> FREE</DynamicCourseAlert>;
};
