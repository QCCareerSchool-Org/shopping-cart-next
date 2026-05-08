'use client';

import type { FC } from 'react';

import { MakeupFreeMasterclassHero } from './hero';
import { AllAccessModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  date: number;
}

const backgroundColor = '#140f0a';

export const MakeupFreeMasterclassPromo: FC<Props> = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <MakeupFreeMasterclassHero />
        </div>
      </Section>
      <Section className="text-center">
        <h2>Enroll in the All-Access Program</h2>
      </Section>
      <AllAccessModal show={showPopup} onHide={handleClick} />
    </>
  );
};
