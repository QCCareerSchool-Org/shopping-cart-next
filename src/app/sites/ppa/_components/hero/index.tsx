import type { FC } from 'react';

import type { PPACourseCode } from '@/domain/ppaCourseCode';
import { courseName } from '@/domain/ppaCourseCode';

interface Props {
  courseCode: PPACourseCode;
}

export const Hero: FC<Props> = ({ courseCode }) => (
  <section>
    <div className="container">
      <h1 className="mb-0">{courseName(courseCode)}</h1>
    </div>
  </section>
);
