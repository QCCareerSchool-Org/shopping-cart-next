import type { FC } from 'react';

import { Grooming20261104Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { PetCoursesSubtitleFirstAid } from '@/app/sites/pet/petCoursesSubtitleFirstAid';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';
import type { LastChanceWithExtensionPeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChanceWithExtensionPeriodDTO;
}

export const Grooming20261104: FC<Props> = ({ date, period }) => (
  <>
    <Grooming20261104Promo date={date} period={period} />
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
      dynamicCourseMessages={[ Save50CourseMessage ]}
      promoCodeDefault="HALLOWEEN26"
    />
  </>
);
