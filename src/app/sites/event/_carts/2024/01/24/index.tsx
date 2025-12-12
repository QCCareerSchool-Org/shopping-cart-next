import type { FC } from 'react';

import { Event20240124Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { TwoFreeEventSpecialtyDynamicMessage } from '@/components/dynamicCourseMessages/twoFreeEventSpecialty';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Event20240124: FC<Props> = ({ date }) => (
  <>
    <Event20240124Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="2SPECIALTY"
      dynamicCourseMessages={[ TwoFreeEventSpecialtyDynamicMessage ]}
    />
  </>
);
