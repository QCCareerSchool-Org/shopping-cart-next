'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePriceState } from '@/hooks/usePriceState';

export const FreeSkincare300DynamicMessage: FC = () => {
  const coursesState = useCoursesState();
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  if (!coursesState.selected.length) {
    return <DynamicCourseAlert variant="info">Enroll in the <strong>Master Makeup Artistry</strong> course to get the <strong>Skincare Consultant</strong> course FREE! You'll also get {discount} off!</DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="danger">Enroll in the <strong>Master Makeup Artistry</strong> course to get the <strong>Skincare Consultant</strong> course FREE!</DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('SK')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free <strong>Skincare Consultant</strong> course</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">You're getting the <strong>Skincare Consultant</strong> course FREE and an additional {discount} off!</DynamicCourseAlert>;
};
