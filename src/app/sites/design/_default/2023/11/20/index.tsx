import type { FC } from 'react';

import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Design20231120Promo } from './promo';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Design20231120: FC<Props> = ({ date }) => {
  return (
    <>
      <Design20231120Promo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={null}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ BogoDynamicCourseMessage ]}
      />
    </>
  );
};
