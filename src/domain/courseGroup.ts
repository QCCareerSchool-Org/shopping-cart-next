import type { Course } from './course';

export type CourseGroup = {
  name?: string;
  items: Course[];
};

export const getCourse = (courseCode: string, courseGroups: CourseGroup[]): Course | undefined => {
  for (const g of courseGroups) {
    for (const i of g.items) {
      if (i.code === courseCode) {
        return i;
      }
    }
  }
};
