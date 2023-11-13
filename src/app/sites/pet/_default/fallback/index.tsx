import type { FC } from 'react';

import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../guarantee';
import { PetFallbackPromo } from './promo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const PetFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <PetFallbackPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Pet Studies"
        guarantee={Guarantee}
        successLink="https://www.qcpetstudies.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
      />
    </>
  );
};