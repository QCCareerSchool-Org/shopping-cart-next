import type { CourseGroup } from '@/domain/courseGroup';

export const moveCourse = (groups: CourseGroup[], courseCode: string, fromGroupName: string, toGroupName: string): CourseGroup[] => {
  const fromGroup = groups.find(group => group.name === fromGroupName);
  const toGroup = groups.find(group => group.name === toGroupName);
  const course = fromGroup?.items.find(item => item.code === courseCode);

  if (!fromGroup || !toGroup || !course) {
    return groups.map(group => ({ ...group, items: [ ...group.items ] }));
  }

  return groups.map(group => {
    if (group.name === fromGroupName) {
      return { ...group, items: group.items.filter(item => item.code !== courseCode) };
    }

    if (group.name === toGroupName) {
      return { ...group, items: [ ...group.items, course ] };
    }

    return { ...group, items: [ ...group.items ] };
  });
};
