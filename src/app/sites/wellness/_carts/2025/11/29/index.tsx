import type { FC } from 'react';

import { Wellness20251129Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Wellness20251129: FC<Props> = ({ date }) => (
  <>
    <Wellness20251129Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={Guarantee}
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="400OFF"
    />
  </>
);
