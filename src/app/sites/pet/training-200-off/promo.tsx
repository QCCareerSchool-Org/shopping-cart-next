import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#aeaeae';

export const PetTraining200OffPromo: FC = () => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero />
    </Section>
  );
};
