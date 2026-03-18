import Image from 'next/image';
import type { FC } from 'react';

import thumbnails from '../_images/thumbnails';
import type { PPACourseCode } from '@/domain/ppaCourseCode';
import { courseName } from '@/domain/ppaCourseCode';

interface Props {
  courseCode: PPACourseCode;
}

export const CourseCard: FC<Props> = ({ courseCode }) => (
  <div className="card">
    <Image className="img-fluid card-img-top" src={thumbnails[courseCode]} alt={courseName(courseCode)} />
    <div className="card-body fw-bold">
      {courseName(courseCode)}
    </div>
  </div>
);
