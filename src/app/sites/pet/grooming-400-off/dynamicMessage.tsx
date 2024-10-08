'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '@/components/dynamicCourseMessages';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePriceState } from '@/hooks/usePriceState';

export const DynamicMessage: FC = () => {
  const coursesState = useCoursesState();
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£400' : '$400';

  if (!coursesState.selected.length) {
    return null;
  }

  if (!coursesState.selected.includes('DG')) {
    return <DynamicCourseAlert variant="warning">Select the <strong>Dog Grooming</strong> course to get {discount} off your tuition</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">Discount applied!</DynamicCourseAlert>;
};
