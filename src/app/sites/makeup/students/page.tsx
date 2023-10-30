import { Suspense } from 'react';

import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { Form } from '@/components/form';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentsPage: PageComponent = () => (
  <>
    <h1>Students</h1>
    <Suspense>
      <Form
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

export default MakeupStudentsPage;
