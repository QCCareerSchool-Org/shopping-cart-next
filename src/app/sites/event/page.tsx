import { agreementLinks } from './agreementLinks';
import { courseGroups } from './courseGroups';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <h1>Event</h1>

      <Form
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={null}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
      />
    </>
  );
};

export default EventPage;
