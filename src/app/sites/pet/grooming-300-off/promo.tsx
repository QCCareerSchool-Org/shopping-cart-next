import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#fe261b';

export const PetGrooming300OffPromo: FC = () => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero />
    </Section>
  );
};
