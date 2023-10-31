import type { FC } from 'react';
import { Suspense } from 'react';

import { Makeup20231023Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Makeup20231023: FC<Props> = ({ date }) => (
  <>
    <Makeup20231023Promo date={date} />
    <Suspense>
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        // promoCodeDefault="SKINCARE"
        showPromoCodeInput={true}
      // dynamicCourseMessages={}
      />
    </Suspense>
  </>
);
