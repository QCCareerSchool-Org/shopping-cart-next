import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#797876';

export const EventStudentFallbackPromo: FC = () => (
  <Section style={{ backgroundColor }} noPadding>
    <Hero />
  </Section>
);
