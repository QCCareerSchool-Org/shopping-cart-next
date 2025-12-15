import type { FC } from 'react';

import { Makeup20250407Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { FreePortfolioDevelopmentMessage } from '@/components/dynamicCourseMessages/freePortfolioDevelopment';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Makeup20250407: FC<Props> = ({ date }) => (
  <>
    <Makeup20250407Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      visualPaymentPlans={true}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="FREEPW"
      dynamicCourseMessages={[ FreePortfolioDevelopmentMessage ]}
    />
  </>
);
