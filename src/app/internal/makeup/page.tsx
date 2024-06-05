import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const courseGroups: CourseGroup[] = [
  {
    name: 'Foundation Courses',
    items: [
      { code: 'MZ', name: 'Master Makeup Artistry' },
      { code: 'SK', name: 'Skincare Consultant' },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'SF', name: 'Special FX Makeup' },
      { code: 'MW', name: 'Pro Makeup Workshop' },
      { code: 'HS', name: 'Hair Styling Essentials' },
      { code: 'AB', name: 'Airbrush Makeup Workshop' },
    ],
  },
  {
    name: 'Personal Makeup',
    items: [ { code: 'PA', name: 'Personal Makeup' } ],
  },
];

const InternalMakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={null}
        internal
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        showPromoCodeInput
      />
    </>
  );
};

export default InternalMakeupPage;
