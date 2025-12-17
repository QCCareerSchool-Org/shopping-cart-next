import type { FC } from 'react';

import { Wellness20251226Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Wellness20251226: FC<Props> = ({ date }) => (
  <>
    <Wellness20251226Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={Guarantee}
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="300OFF"
    />
  </>
);
