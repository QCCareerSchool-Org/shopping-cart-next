import type { FC } from 'react';

import { Pet20260422Promo } from './promo';
import { PetCoursesSubtitleFirstAid } from '@/app/sites/pet/petCoursesSubtitleFirstAid';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';
import { agreementLinks } from '@/pet/agreementLinks';
import { courseGroups } from '@/pet/courseGroups';
import { Guarantee } from '@/pet/guarantee';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Pet20260422: FC<Props> = ({ date, period }) => (
  <>
    <Pet20260422Promo date={date} period={period} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={Guarantee}
      coursesSubtitle={PetCoursesSubtitleFirstAid}
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="SHOW"
      dynamicCourseMessages={[ Save50CourseMessage ]}
      visualPaymentPlans
      promoCodeDefault="PET200OFF"
    />
  </>
);
