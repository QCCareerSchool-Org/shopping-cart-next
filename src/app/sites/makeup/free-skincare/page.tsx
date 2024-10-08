import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { MakeupFreeSkincarePromo } from './promo';
import { FreeSkincare300DynamicMessage } from '@/components/dynamicCourseMessages/freeSkincare300';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupFreeSkincarePage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return (
    <>
      <MakeupFreeSkincarePromo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ FreeSkincare300DynamicMessage ]}
        promoCodeDefault="SKINCARE300"
      />
    </>
  );
};

export default MakeupFreeSkincarePage;
