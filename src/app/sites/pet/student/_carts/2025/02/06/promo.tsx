import type { FC } from 'react';

import { Hero20250206 } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#0d130a';

export const PetStudent20250206Promo: FC = () => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250206 />
    </Section>
  );
};
