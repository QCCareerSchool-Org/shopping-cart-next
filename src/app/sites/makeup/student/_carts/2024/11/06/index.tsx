import type { FC } from 'react';

import { MakeupStudent20241106Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const MakeupStudent20241106: FC<Props> = ({ date }) => {
  return (
    <>
      <MakeupStudent20241106Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="QCLASHES"
      />
    </>
  );
};
