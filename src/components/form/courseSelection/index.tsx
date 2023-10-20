import type { FC } from 'react';

import { Section } from '@/components/section';
import type { CourseGroup } from '@/domain/courses';

type Props = {
  courseGroups: CourseGroup[];
};

export const CourseSelection: FC<Props> = ({ courseGroups }) => {
  console.log(courseGroups);
  return (
    <Section>
      <h2 className="h1 text-center">Choose Your Courses</h2>
    </Section>
  );
};
