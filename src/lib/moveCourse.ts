import type { CourseGroup } from '@/domain/courseGroup';

export const moveCourse = (groups: CourseGroup[], courseCode: string, fromGroupName: string, toGroupName: string): CourseGroup[] => {
  const fromGroup = groups.find(group => group.name === fromGroupName);
  const toGroup = groups.find(group => group.name === toGroupName);
  const course = fromGroup?.items.find(item => item.code === courseCode);

  if (!fromGroup) {
    throw Error(`No course group found with name ${fromGroupName}`);
  }

  if (!toGroup) {
    throw Error(`No course group found with name ${toGroupName}`);
  }

  if (!course) {
    throw Error(`No course found with code ${courseCode} in course group ${fromGroupName}`);
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
