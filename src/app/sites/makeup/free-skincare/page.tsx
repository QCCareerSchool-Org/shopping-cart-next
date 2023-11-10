import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { MakeupFreeSkincarePromo } from './promo';
import { FreeSkincareDynamicMessage } from '@/components/dynamicCourseMessages/freeSkincare';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupFreeSkincarePage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <MakeupFreeSkincarePromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ FreeSkincareDynamicMessage ]}
        promoCodeDefault="SKINCARE"
      />
    </>
  );
};

export default MakeupFreeSkincarePage;
