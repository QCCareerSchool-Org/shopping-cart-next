import type { FC } from 'react';

import { Pet20261021Promo } from './promo';
import { PetCoursesSubtitleFirstAid } from '@/app/sites/pet/petCoursesSubtitleFirstAid';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';
import type { LastChanceWithExtensionPeriodDTO } from '@/lib/period';
import { agreementLinks } from '@/pet/agreementLinks';
import { courseGroups } from '@/pet/courseGroups';
import { Guarantee } from '@/pet/guarantee';

interface Props {
  date: number;
  period: LastChanceWithExtensionPeriodDTO;
}

export const Pet20261021: FC<Props> = ({ date, period }) => (
  <>
    <Pet20261021Promo date={date} period={period} />
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
      promoCodeDefault="PET400OFF"
    />
  </>
);
