import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#506E39';

export const PetEarthwiseAcceleratedGroomingPromo: FC = () => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero />
    </Section>
  </>
);
