import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { EventStudentFallbackPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventSave60Page: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <>
      <EventStudentFallbackPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="HIDE"
        promoCodeDefault="SAVE60"
        visualPaymentPlans
      />
    </>
  );
};

export default EventSave60Page;
