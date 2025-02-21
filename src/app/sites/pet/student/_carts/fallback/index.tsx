import type { FC } from 'react';

import { PetStudentPromo } from './promo';
import { agreementLinks } from '../../../agreementLinks';
import { Guarantee } from '../../../guarantee';
import { PetCoursesSubtitleFirstAid } from '../../../petCoursesSubtitleFirstAid';
import { courseGroups } from '../../courseGroups';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const PetStudentFallback: FC<Props> = ({ date }) => (
  <>
    <PetStudentPromo />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={Guarantee}
      coursesSubtitle={PetCoursesSubtitleFirstAid}
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      student
      dynamicCourseDescriptions="SHOW"
      visualPaymentPlans
    />
  </>
);
