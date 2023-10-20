import type { FC } from 'react';

import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Form } from '@/components/form';

export const Makeup20231010: FC = () => (
  <>
    <h1>2023-10-10</h1>
    <Form courseGroups={courseGroups} />
  </>
);
