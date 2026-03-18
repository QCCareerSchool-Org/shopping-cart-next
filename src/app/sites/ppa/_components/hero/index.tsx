import type { FC } from 'react';

import thumbnails from '../../_images/hero';
import { summaries } from '../../summaries';
import { BackgroundImage } from '@/components/backgroundImage';
import type { PPACourseCode } from '@/domain/ppaCourseCode';
import { courseName } from '@/domain/ppaCourseCode';

interface Props {
  courseCode: PPACourseCode;
}

export const Hero: FC<Props> = ({ courseCode }) => (
  <section className="text-white text-shadow">
    <BackgroundImage src={thumbnails[courseCode]} priority />
    <div className="container text-center">
      <h1 className="mb-3">{courseName(courseCode)}</h1>
      <p className="lead fw-bold mb-0">{summaries[courseCode]}</p>
    </div>
  </section>
);
