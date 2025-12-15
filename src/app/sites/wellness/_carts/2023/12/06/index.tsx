import type { FC } from 'react';

import { Wellness20231206Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Wellness20231206: FC<Props> = ({ date }) => (
  <>
    <Wellness20231206Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={Guarantee}
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="SHOW"
      visualPaymentPlans
      promoCodeDefault="100OFF"
      dynamicCourseMessages={[ Save50CourseMessage ]}
    />
  </>
);
