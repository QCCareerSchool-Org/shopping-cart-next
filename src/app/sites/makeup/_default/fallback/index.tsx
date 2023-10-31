import type { FC } from 'react';

import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../guarantee';
import { MakeupFallbackPromo } from './promo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const MakeupFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <MakeupFallbackPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
      />
    </>
  );
};
