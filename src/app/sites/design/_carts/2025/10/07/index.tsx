import type { FC } from 'react';

import { Design20251007Promo } from './promo';
import { agreementLinks } from '@/app/sites/design/agreementLinks';
import { courseGroups } from '@/app/sites/design/courseGroups';
import { Guarantee } from '@/app/sites/design/guarantee';
import { FreeColorConsultantMessage } from '@/components/dynamicCourseMessages/freeColorConsultant';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Design20251007: FC<Props> = ({ date }) => {
  return (
    <>
      <Design20251007Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ FreeColorConsultantMessage ]}
        promoCodeDefault="FREECOLOR"
        hideCourseTable
      />
    </>
  );
};
