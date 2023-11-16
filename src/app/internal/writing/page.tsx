import { agreementLinks } from '@/app/sites/writing/agreementLinks';
import { courseGroups } from '@/app/sites/writing/courseGroups';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const InternalWritingPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <Form
        date={date}
        courseGroups={courseGroups}
        school="Winghill Writing School"
        guarantee={null}
        internal
        successLink="https://www.winghill.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        showPromoCodeInput
      />
    </>
  );
};

export default InternalWritingPage;
