import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { EventFloralPromo } from './promo';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const courseGroups: CourseGroup[] = [
  {
    items: [ { code: 'FD', name: 'Floral Design' } ],
  },
];

const coursesOverride = [ 'FD' ];

const EventFloralPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return (
    <>
      <EventFloralPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        coursesOverride={coursesOverride}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="EVENT100OFF"
      />
    </>
  );
};

export default EventFloralPage;
