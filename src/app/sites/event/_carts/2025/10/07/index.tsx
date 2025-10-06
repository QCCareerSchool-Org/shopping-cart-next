import type { FC } from 'react';

import { Event20251007Promo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { FreeEventSpecialtyDynamicMessage } from '@/components/dynamicCourseMessages/freeEventSpecialty';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Event20251007: FC<Props> = ({ date }) => (
  <>
    <Event20251007Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="SPECIALTY100"
      dynamicCourseMessages={[ FreeEventSpecialtyDynamicMessage ]}
    />
  </>
);
