import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

type Props = {
  newYears: boolean;
};

export const DesignStudentPromo: FC<Props> = ({ newYears }) => {
  const backgroundColor = newYears ? '#000' : '#bbbcc0';
  return (
    <Section style={{ backgroundColor }} noPadding>
      <Hero newYears={newYears} />
    </Section>
  );
};
