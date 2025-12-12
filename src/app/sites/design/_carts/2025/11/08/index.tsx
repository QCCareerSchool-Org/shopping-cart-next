import type { FC } from 'react';

import { Design20251108Promo } from './promo';
import { agreementLinks } from '@/app/sites/design/agreementLinks';
import { courseGroups } from '@/app/sites/design/courseGroups';
import { Guarantee } from '@/app/sites/design/guarantee';
import { BogoVirtualDesignDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogoVirtualDesign';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Design20251108: FC<Props> = ({ date }) => {
  return (
    <>
      <Design20251108Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ BogoVirtualDesignDynamicCourseMessage ]}
        promoCodeDefault="BOGOVIRTUAL"
        hideCourseTable
      />
    </>
  );
};
