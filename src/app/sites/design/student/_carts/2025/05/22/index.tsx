import type { FC } from 'react';

import { DesignStudent20250522Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { FreeVirtualDesignDynamicMessage } from '@/components/dynamicCourseMessages/freeVirtualDesign';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const DesignStudent20250522: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignStudent20250522Promo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ FreeVirtualDesignDynamicMessage ]}
        promoCodeDefault="FREEVIRTUAL"
      />
    </>
  );
};
