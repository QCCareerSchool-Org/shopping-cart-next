import type { FC } from 'react';

import { Event20250507Promo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { TwoFreeEventSpecialtyDynamicMessage } from '@/components/dynamicCourseMessages/twoFreeEventSpecialty';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Event20250507: FC<Props> = ({ date }) => (
  <>
    <Event20250507Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="2FREESPECIALTY"
      dynamicCourseMessages={[ TwoFreeEventSpecialtyDynamicMessage ]}
    />
  </>
);
