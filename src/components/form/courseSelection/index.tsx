import type { FC } from 'react';

import { Section } from '@/components/section';
import type { CourseGroup } from '@/domain/courseGroup';
import { useCoursesState } from '@/hooks/useCoursesState';

type Props = {
  courseGroups: CourseGroup[];
  dynamicCourseMessages?: FC[];
};

export const CourseSelection: FC<Props> = ({ courseGroups, dynamicCourseMessages }) => {
  const coursesState = useCoursesState();
  return (
    <Section>
      <h2 className="h1 text-center">Choose Your Courses</h2>
      <pre>{JSON.stringify(coursesState.selected)}</pre>
      <ul>
        {courseGroups.map(g => (
          <li key={g.name}>{g.name}
            <ul>
              {g.items.map(i => <li key={i.code}>{i.name}</li>)}
            </ul>
          </li>
        ))}
      </ul>
      {dynamicCourseMessages?.map((DynamicCourseMessage, i) => (
        <DynamicCourseMessage key={i} />
      ))}
    </Section>
  );
};
