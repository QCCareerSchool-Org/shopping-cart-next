import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#727274';

export const EventStudentPromo: FC = () => {
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero />
      </Section>
    </>
  );
};
