import type { FC } from 'react';

import { Event20260603Promo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { BogoEvent50Off } from '@/components/dynamicCourseMessages/bogoEvent50Off'; ;
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Event20260603: FC<Props> = ({ date, period }) => (
  <>
    <Event20260603Promo date={date} period={period} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="BOGOANY"
      dynamicCourseMessages={[ BogoEvent50Off ]}
    />
  </>
);
