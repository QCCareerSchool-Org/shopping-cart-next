import type { Course } from './course';

export type CourseGroup = {
  name?: string;
  items: Course[];
};
