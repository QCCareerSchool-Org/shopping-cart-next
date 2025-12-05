import { ppaCourses } from './courses';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    items: ppaCourses.map(course => ({
      code: course.code,
      name: course.name,
    })),
  },
];
