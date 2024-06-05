import { agreementLinks } from '@/app/sites/pet/agreementLinks';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming' },
      { code: 'GT', name: 'Grooming Technician' },
      { code: 'DT', name: 'Dog Training' },
      { code: 'DD', name: 'Dog Daycare' },
      { code: 'FA', name: 'First Aid for Groomers' },
      { code: 'DC', name: 'Dog Behavior' },
    ],
  },
];

const InternalPetPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Pet Studies"
        guarantee={null}
        internal
        successLink="https://www.qcpetstudies.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        showPromoCodeInput
      />
    </>
  );
};

export default InternalPetPage;
