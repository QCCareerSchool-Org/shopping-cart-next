import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { EventFreeSpecialtyPromo } from './promo';
import { TwoFreeEventSpecialtyDynamicMessage } from '@/components/dynamicCourseMessages/twoFreeEventSpecialty';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventFreeSpecialtyPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return (
    <>
      <EventFreeSpecialtyPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="2SPECIALTY"
        dynamicCourseMessages={[ TwoFreeEventSpecialtyDynamicMessage ]}
      />
    </>
  );
};

export default EventFreeSpecialtyPage;
