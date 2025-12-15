'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#1a1c1e';

interface Props {
  date: number;
}

export const DesignOrganizingPromo: FC<Props> = ({ date }) => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero date={date} />
    </Section>
  );
};
