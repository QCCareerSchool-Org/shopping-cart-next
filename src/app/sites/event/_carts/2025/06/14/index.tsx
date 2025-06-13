import type { FC } from 'react';

import { Event20250614Promo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { BogoEventDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogoEvent';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Event20250614: FC<Props> = ({ date }) => (
  <>
    <Event20250614Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="BOGO100"
      dynamicCourseMessages={[ BogoEventDynamicCourseMessage ]}
    />
  </>
);
