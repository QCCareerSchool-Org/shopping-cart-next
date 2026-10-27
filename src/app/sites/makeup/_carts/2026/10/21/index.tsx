import type { FC } from 'react';

import { Makeup20261021Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { FreeSKSFMessage } from '@/components/dynamicCourseMessages/freeSKSF';
import { Form } from '@/components/form';
import type { LastChanceWithExtensionPeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChanceWithExtensionPeriodDTO;
}

export const Makeup20261021: FC<Props> = ({ date, period }) => (
  <>
    <Makeup20261021Promo date={date} period={period} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      visualPaymentPlans={true}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="SKSFFREE"
      dynamicCourseMessages={[ FreeSKSFMessage ]}
    />
  </>
);
