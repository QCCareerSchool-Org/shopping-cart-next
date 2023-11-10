import type { FC } from 'react';

import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Form } from '@/components/form';
import { Section } from '@/components/section';

type Props = {
  date: number;
};

export const Event20231120: FC<Props> = ({ date }) => (
  <>
    <Section>
      <h1>Event</h1>
    </Section>
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={null}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
    />
  </>
);
