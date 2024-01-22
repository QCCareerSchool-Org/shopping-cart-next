import type { FC } from 'react';
import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../guarantee';
import { WellnessFallbackPromo } from './promo';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const WellnessFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <WellnessFallbackPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Wellness Studies"
        guarantee={Guarantee}
        successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        dynamicCourseMessages={[ Save50CourseMessage ]}
      />
    </>
  );
};
