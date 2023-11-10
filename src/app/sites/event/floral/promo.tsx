'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#2a2e31';

export const EventFloralPromo: FC = () => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero />
    </Section>
  );
};
