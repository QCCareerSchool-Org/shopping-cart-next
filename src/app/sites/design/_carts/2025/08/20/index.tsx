import type { FC } from 'react';

import { Design20250820Promo } from './promo';
import { agreementLinks } from '@/app/sites/design/agreementLinks';
import { courseGroups } from '@/app/sites/design/courseGroups';
import { Guarantee } from '@/app/sites/design/guarantee';
import { BogoVirtualDesignDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogoVirtualDesign';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Design20250820: FC<Props> = ({ date }) => {
  return (
    <>
      <Design20250820Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="BOGOVIRTUAL"
        dynamicCourseMessages={[ BogoVirtualDesignDynamicCourseMessage ]}
      />
    </>
  );
};
