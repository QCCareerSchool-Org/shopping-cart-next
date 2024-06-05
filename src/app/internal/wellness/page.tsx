import { agreementLinks } from '@/app/sites/wellness/agreementLinks';
import { courseGroups } from '@/app/sites/wellness/courseGroups';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const InternalWellnessPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Wellness Studies"
        guarantee={null}
        internal
        successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        showPromoCodeInput
      />
    </>
  );
};

export default InternalWellnessPage;
