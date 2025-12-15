import type { FC } from 'react';

import { EventStudentFallbackPromo } from './promo';
import { agreementLinks } from '../../../agreementLinks';
import { courseGroups } from '../../../courseGroups';
import { Guarantee } from '../../../guarantee';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const EventStudentFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <EventStudentFallbackPromo />
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
      />
    </>
  );
};
