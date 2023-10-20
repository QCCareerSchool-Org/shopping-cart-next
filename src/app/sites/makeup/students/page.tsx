import type { FC } from 'react';

import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { Form } from '@/components/form';

const MakeupStudentsPage: FC = () => (
  <>
    <h1>Students</h1>
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      student={true}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
    />
  </>
);

export default MakeupStudentsPage;
