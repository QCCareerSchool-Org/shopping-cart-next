import type { FC } from 'react';

import { Makeup20240807Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { MasterMakeupSave300 } from '@/components/dynamicCourseMessages/masterMakeupSave300';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Makeup20240807: FC<Props> = ({ date }) => (
  <>
    <Makeup20240807Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      visualPaymentPlans={true}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="MASTER300"
      dynamicCourseMessages={[ MasterMakeupSave300 ]}
    />
  </>
);
