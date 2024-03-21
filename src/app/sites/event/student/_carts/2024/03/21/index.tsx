import type { FC } from 'react';

import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { EventStudent20240321Promo } from './promo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const EventStudent20240321: FC<Props> = ({ date }) => {
  return (
    <>
      <EventStudent20240321Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="PORTFOLIO50"
      />
    </>
  );
};
