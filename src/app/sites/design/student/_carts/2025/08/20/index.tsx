import type { FC } from 'react';

import { DesignStudent20250820Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const DesignStudent20250820: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignStudent20250820Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="SAVE60"
      />
    </>
  );
};
