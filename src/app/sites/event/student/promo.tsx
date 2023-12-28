import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

type Props = {
  newYears: boolean;
};

export const EventStudentPromo: FC<Props> = ({ newYears }) => {
  const backgroundColor = newYears ? '#84796c' : '#727274';
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero newYears={newYears} />
      </Section>
    </>
  );
};
