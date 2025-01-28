import type { FC } from 'react';

import { Hero20250129 } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#478798';

export const PetStudent20250129Promo: FC = () => {
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250129 />
    </Section>
  );
};
