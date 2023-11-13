import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { EventTuitionDiscountPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventTuitionDiscountPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <EventTuitionDiscountPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="EVENT200OFF"
      />
    </>
  );
};

export default EventTuitionDiscountPage;
