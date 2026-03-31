import type { FC } from 'react';

import { Pet20260401Promo } from './promo';
import { PetCoursesSubtitleFirstAid } from '@/app/sites/pet/petCoursesSubtitleFirstAid';
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';
import { agreementLinks } from '@/pet/agreementLinks';
import { courseGroups } from '@/pet/courseGroups';
import { Guarantee } from '@/pet/guarantee';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Pet20260401: FC<Props> = ({ date, period }) => (
  <>
    <Pet20260401Promo date={date} period={period} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={Guarantee}
      coursesSubtitle={PetCoursesSubtitleFirstAid}
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="SHOW"
      visualPaymentPlans
      promoCodeDefault="BOGO"
    />
  </>
);
