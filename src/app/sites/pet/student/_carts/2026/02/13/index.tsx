import type { FC } from 'react';

import { PetStudent20260213Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { Guarantee } from '../../../../../guarantee';
import { PetCoursesSubtitleFirstAid } from '../../../../../petCoursesSubtitleFirstAid';
import { courseGroups } from '../../../../courseGroups';
import { Form } from '@/components/form';
import type { BaseLastChancePeriod } from '@/lib/period';

interface Props {
  date: number;
  period: BaseLastChancePeriod;
}

export const PetStudent20260213: FC<Props> = ({ date, period }) => (
  <>
    <PetStudent20260213Promo date={date} period={period} />
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
