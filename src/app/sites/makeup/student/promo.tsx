import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#2b2b2b';

export const MakeupStudentPromo: FC = () => {
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero />
      </Section>
    </>
  );
};
