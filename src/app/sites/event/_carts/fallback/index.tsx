import type { FC } from 'react';

import { EventFallbackPromo } from './promo';
import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { FreeEventSpecialtyDynamicMessage } from '@/components/dynamicCourseMessages/freeEventSpecialty';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const EventFallback: FC<Props> = ({ date }) => (
  <>
    <EventFallbackPromo />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="SPECIALTY"
      dynamicCourseMessages={[ FreeEventSpecialtyDynamicMessage ]}
    />
  </>
);
