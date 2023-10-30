import type { FC } from 'react';

import { agreementLinks } from '../../../agreementLinks';
import { courseGroups } from '../../../courseGroups';
import { Form } from '@/components/form';
import { Section } from '@/components/section';

export const Design202310: FC = () => (
  <>
    <Section>
      Design
    </Section>
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={null}
      successLink="https://www.qcdesignschool.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="SHOW"
    />
  </>
);
