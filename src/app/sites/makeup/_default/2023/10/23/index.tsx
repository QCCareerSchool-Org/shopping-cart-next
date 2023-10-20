import type { FC } from 'react';

import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Makeup20231023: FC<Props> = ({ date }) => (
  <>
    <h1>2023-10-23 the date is {date}</h1>
    <Form courseGroups={courseGroups} defaultPromoCode="SKINCARE" />
  </>
);
