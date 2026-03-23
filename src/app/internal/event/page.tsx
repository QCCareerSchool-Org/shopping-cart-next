import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const internalCourseGroups: CourseGroup[] = [
  {
    name: 'All Access Program',
    items: [
      { code: 'AA', name: <>Event & Wedding Planning <span className="text-danger">(use code <strong className="font-monospace">ALLACCESS</strong>)</span></> },
      { code: 'CP', name: 'Corporate Event Planning' },
      { code: 'ED', name: 'Event Decor' },
      { code: 'LW', name: 'Luxury Wedding & Event Planning' },
      { code: 'DW', name: 'Destination Wedding Planning' },
      { code: 'FL', name: 'Festivals & Live Events' },
      { code: 'EB', name: 'Accelerate Your Business Workshop' },
      { code: 'VE', name: 'Virtual Event Training' },
    ],
  },
  ...courseGroups,
];

const InternalEventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <Form
        date={date}
        courseGroups={internalCourseGroups}
        school="QC Event School"
        guarantee={null}
        internal
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        showPromoCodeInput
      />
    </>
  );
};

export default InternalEventPage;
