import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { EventContinuedEducationPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventContinuedEducationPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <EventContinuedEducationPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
      />
    </>
  );
};

export default EventContinuedEducationPage;
