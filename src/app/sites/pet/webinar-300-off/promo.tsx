import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#000';

export const PetWebinar30OffPromo: FC = () => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero />
    </Section>
  );
};
