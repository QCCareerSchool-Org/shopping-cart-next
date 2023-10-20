import type { FC } from 'react';
import { courseGroups } from '../../courseGroups';
import { Form } from '@/components/form';

export const MakeupFallback: FC = () => {
  return (
    <>
      <h1>Fallback</h1>
      <Form courseGroups={courseGroups} />
    </>
  );
};
