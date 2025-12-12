import type { FC } from 'react';

import { Wellness20251108Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Wellness20251108: FC<Props> = ({ date }) => (
  <>
    <Wellness20251108Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={Guarantee}
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="300OFF"
      dynamicCourseMessages={[ Save50CourseMessage ]}
    />
  </>
);
