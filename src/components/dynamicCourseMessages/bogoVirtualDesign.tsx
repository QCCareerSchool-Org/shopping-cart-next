'use client';

import type { FC } from 'react';

import { DynamicCourseAlert } from '.';
import { useCoursesState } from '@/hooks/useCoursesState';

export const BogoVirtualEventDynamicCourseMessage: FC = () => {
  const coursesState = useCoursesState();
  const courseCount = coursesState.selected.length;
  const ve = coursesState.selected.includes('VE');

  if (courseCount === 0) {
    return null;
  }

  if (courseCount === 1 && ve) {
    return <DynamicCourseAlert variant="warning">Select another course and get the <strong>Virtual Design</strong> course free</DynamicCourseAlert>;
  }

  if (courseCount === 1 && !ve) {
    return <DynamicCourseAlert variant="warning">Don't forget to select your free second course</DynamicCourseAlert>;
  }

  if (courseCount >= 3 && ve) {
    return <DynamicCourseAlert variant="success">Free second course and free <strong>Virtual Design</strong> course selected</DynamicCourseAlert>;
  }

  if (courseCount > 1 && ve) {
    return <DynamicCourseAlert variant="success">Free <strong>Virtual Design</strong> course selected.<br /><br />Don't forget to select your free second course</DynamicCourseAlert>;
  }

  if (courseCount > 1 && !ve) {
    return <DynamicCourseAlert variant="success">Free second course selected.<br /><br />Don't forget to select your free <strong>Virtual Design</strong> course</DynamicCourseAlert>;
  }
};
