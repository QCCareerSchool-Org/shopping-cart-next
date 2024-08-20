import type { FC } from 'react';

import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { Wellness20240821Promo } from './promo';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Wellness20240821: FC<Props> = ({ date }) => (
  <>
    <Wellness20240821Promo date={date} />
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
