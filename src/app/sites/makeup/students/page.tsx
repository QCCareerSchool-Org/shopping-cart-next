import { Suspense } from 'react';

import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentsPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <h1>Students</h1>
      <Suspense>
        <Form
          date={date}
          courseGroups={courseGroups}
          school="QC Makeup Academy"
          guarantee={Guarantee}
          student={true}
          successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
          agreementLinks={agreementLinks}
        />
      </Suspense>
    </>
  );
};

export default MakeupStudentsPage;
