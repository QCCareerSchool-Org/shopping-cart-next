import type { FC } from 'react';

import { PetStudent20250614Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { Guarantee } from '../../../../../guarantee';
import { PetCoursesSubtitleFirstAid } from '../../../../../petCoursesSubtitleFirstAid';
import { courseGroups } from '../../../../courseGroups';
import { Daycare60DynamicMessage } from '@/components/dynamicCourseMessages/daycare60';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const PetStudent20250614: FC<Props> = ({ date }) => (
  <>
    <PetStudent20250614Promo date={date} />
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
      dynamicCourseMessages={[ Daycare60DynamicMessage ]}
      promoCodeDefault="DAYCARE60"
    />
  </>
);
