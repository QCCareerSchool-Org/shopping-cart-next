import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { EventFloralDesign200OffPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventFloralDesign200OffPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return (
    <>
      <EventFloralDesign200OffPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="FOUNDATION200"
      />
    </>
  );
};

export default EventFloralDesign200OffPage;
