import type { FC } from 'react';

import { Hero } from './hero';
import { Section } from '@/components/section';

type Props = {
  newYears: boolean;
};

export const MakeupStudentPromo: FC<Props> = ({ newYears }) => {
  const backgroundColor = newYears ? '#000' : '#2b2b2b';

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero newYears={newYears} />
      </Section>
    </>
  );
};
