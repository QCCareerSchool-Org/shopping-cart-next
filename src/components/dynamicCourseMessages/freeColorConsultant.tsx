'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { usePriceState } from '@/hooks/usePriceState';

export const FreeColorConsultantMessage: FC = () => {
  const priceState = usePriceState();

  const ccPrice = priceState?.courses.find(c => c.code === 'CC');

  if (typeof ccPrice === 'undefined') {
    return <DynamicCourseAlert variant="info">Get the <strong>Color Consultant Course</strong> FREE when you also select another course of greater or equal value!</DynamicCourseAlert>;
  }

  if (priceState?.courses.some(c => c.code !== 'CC' && c.cost >= ccPrice.cost)) {
    return <DynamicCourseAlert variant="success">You're getting the <strong>Color Consultant Course</strong> FREE!</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="warning">Select another course of greater or equal value in order to get the <strong>Color Consultant Course</strong> FREE</DynamicCourseAlert>;
};
