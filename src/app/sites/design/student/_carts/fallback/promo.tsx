import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#bbbcc0';

export const DesignStudentFallbackPromo: FC = () => (
  <Section style={{ backgroundColor }} noPadding>
    <Hero />
  </Section>
);
