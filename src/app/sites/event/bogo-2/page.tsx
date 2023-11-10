import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { EventBogo2Promo } from './promo';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventBogo2Page: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <EventBogo2Promo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="EVENTFREECOURSE"
        dynamicCourseMessages={[ BogoDynamicCourseMessage ]}
      />
    </>
  );
};

export default EventBogo2Page;
