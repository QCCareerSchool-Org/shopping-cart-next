import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#605960';

export const PetContinuedEducationPromo: FC = () => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero />
    </Section>
  );
};
