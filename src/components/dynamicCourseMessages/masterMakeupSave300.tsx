'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePriceState } from '@/hooks/usePriceState';

export const MasterMakeupSave300: FC = () => {
  const coursesState = useCoursesState();
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="info">Select the <strong>Master Makeup Artistry</strong> course and save {discount}</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">{discount} off the <strong>Master Makeup Artistry</strong> course!</DynamicCourseAlert>;
};
