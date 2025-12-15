import type { FC } from 'react';

import { PetStudent20250225Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { Guarantee } from '../../../../../guarantee';
import { PetCoursesSubtitleFirstAid } from '../../../../../petCoursesSubtitleFirstAid';
import { courseGroups } from '../../../../courseGroups';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const PetStudent20250225: FC<Props> = ({ date }) => (
  <>
    <PetStudent20250225Promo date={date} />
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
      promoCodeDefault="SAVE60"
    />
  </>
);
