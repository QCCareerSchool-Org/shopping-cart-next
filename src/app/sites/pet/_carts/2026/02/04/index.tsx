import type { FC } from 'react';

import { Pet20260204Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { PetCoursesSubtitleFirstAid } from '@/app/sites/pet/petCoursesSubtitleFirstAid';
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  promotionPeriod: LastChancePeriodDTO;
}

export const Pet20260204: FC<Props> = ({ date, promotionPeriod }) => (
  <>
    <Pet20260204Promo date={date} promotionPeriod={promotionPeriod} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={Guarantee}
      coursesSubtitle={PetCoursesSubtitleFirstAid}
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="SHOW"
      visualPaymentPlans
      promoCodeDefault="PET300OFF"
    />
  </>
);
