import type { FC } from 'react';

import { MakeupStudentFallbackPromo } from './promo';
import { agreementLinks } from '../../../agreementLinks';
import { courseGroups } from '../../../courseGroups';
import { Guarantee } from '../../../guarantee';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const MakeupStudentFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <MakeupStudentFallbackPromo />
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
      />
    </>
  );
};
