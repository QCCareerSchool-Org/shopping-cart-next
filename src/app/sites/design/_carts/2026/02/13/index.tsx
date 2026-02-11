import type { FC } from 'react';

import { Design20260213Promo } from './promo';
import { agreementLinks } from '@/app/sites/design/agreementLinks';
import { courseGroups } from '@/app/sites/design/courseGroups';
import { Guarantee } from '@/app/sites/design/guarantee';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';
import type { BaseLastChancePeriod } from '@/lib/period';

interface Props {
  date: number;
  promotionPeriod: BaseLastChancePeriod;
}

export const Design20260213: FC<Props> = ({ date, promotionPeriod }) => {
  return (
    <>
      <Design20260213Promo date={date} promotionPeriod={promotionPeriod} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ BogoDynamicCourseMessage ]}
        promoCodeDefault="BOGO100"
        hideCourseTable
      />
    </>
  );
};
