import type { FC } from 'react';
import { Suspense } from 'react';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Makeup20231010: FC<Props> = ({ date }) => (
  <>
    <h1>2023-10-10</h1>
    <Suspense>
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
      />
    </Suspense>
  </>
);
