import type { FC } from 'react';

import { EventStudent20260213Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';
import type { BaseLastChancePeriod } from '@/lib/period';

interface Props {
  date: number;
  promotionPeriod: BaseLastChancePeriod;
}

export const EventStudent20260213: FC<Props> = ({ date, promotionPeriod }) => {
  return (
    <>
      <EventStudent20260213Promo date={date} promotionPeriod={promotionPeriod} />
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
        promoCodeDefault="SAVE60"
      />
    </>
  );
};
