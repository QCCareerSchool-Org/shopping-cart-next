import type { FC } from 'react';

import { Event20250225Promo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Event20250225: FC<Props> = ({ date }) => (
  <>
    <Event20250225Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="BOGO"
      dynamicCourseMessages={[ BogoDynamicCourseMessage ]}
    />
  </>
);
