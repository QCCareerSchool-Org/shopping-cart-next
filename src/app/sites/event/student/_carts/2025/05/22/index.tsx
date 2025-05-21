import type { FC } from 'react';

import { EventStudent20250522Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { FreeVirtualEventDynamicMessage } from '@/components/dynamicCourseMessages/freeVirtualEvent';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const EventStudent20250522: FC<Props> = ({ date }) => {
  return (
    <>
      <EventStudent20250522Promo date={date} />
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
        dynamicCourseMessages={[ FreeVirtualEventDynamicMessage ]}
        promoCodeDefault="FREEVIRTUAL"
      />
    </>
  );
};
