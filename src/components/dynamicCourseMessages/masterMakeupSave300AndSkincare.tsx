'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePriceState } from '@/hooks/usePriceState';

export const MasterMakeupSave300AndSkincare: FC = () => {
  const coursesState = useCoursesState();
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  if (!coursesState.selected.includes('MZ')) {
    return <DynamicCourseAlert variant="info">Select the <strong>Master Makeup Artistry</strong> course and save {discount} and get the <strong>Skincare Consultant</strong> course for FREE!</DynamicCourseAlert>;
  }

  if (!coursesState.selected.includes('SK')) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free <strong>Skincare Consultant</strong> course!</DynamicCourseAlert>;
  }

  return <DynamicCourseAlert variant="success">{discount} off and free <strong>Skincare Consultant</strong> course!</DynamicCourseAlert>;
};
