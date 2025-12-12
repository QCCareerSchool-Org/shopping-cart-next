import type { FC } from 'react';

import { Event20250820Promo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { BogoVirtualEventDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogoVirtualEvent';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Event20250820: FC<Props> = ({ date }) => (
  <>
    <Event20250820Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="BOGOVIRTUAL"
      dynamicCourseMessages={[ BogoVirtualEventDynamicCourseMessage ]}
    />
  </>
);
