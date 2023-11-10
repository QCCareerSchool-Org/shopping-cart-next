import type { FC } from 'react';

import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Event20231120Promo } from './promo';
import { Guarantee } from '@/app/sites/event/guarantee';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Event20231120: FC<Props> = ({ date }) => (
  <>
    <Event20231120Promo />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      dynamicCourseMessages={[ BogoDynamicCourseMessage ]}
    />
  </>
);
