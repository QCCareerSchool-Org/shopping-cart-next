import type { FC } from 'react';

import { Design20240420Promo } from './promo';
import { agreementLinks } from '@/app/sites/design/agreementLinks';
import { courseGroups } from '@/app/sites/design/courseGroups';
import { Guarantee } from '@/app/sites/design/guarantee';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Design20240420: FC<Props> = ({ date }) => {
  return (
    <>
      <Design20240420Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="BOGO"
        dynamicCourseMessages={[ BogoDynamicCourseMessage ]}
      />
    </>
  );
};
