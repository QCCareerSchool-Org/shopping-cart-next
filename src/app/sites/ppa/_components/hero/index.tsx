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
  <section className="text-white text-shadow d-flex flex-column" style={{ minHeight: 400 }}>
    <BackgroundImage src={thumbnails[courseCode]} priority />
    <div className="container text-center d-flex flex-grow-1">
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div>
          <h1 className="mb-3">{courseName(courseCode)}</h1>
          <p className="lead fw-bold mb-0">{summaries[courseCode]}</p>
        </div>
      </div>
    </div>
  </section>
);
