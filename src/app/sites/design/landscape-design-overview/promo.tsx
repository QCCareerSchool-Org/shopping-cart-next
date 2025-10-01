'use client';

import type { FC } from 'react';

import { LDHero } from './hero';
import { LDModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';

type Props = {
  date: number;
};

export const LDPromo: FC<Props> = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <LDHero />
        </div>
      </Section>
      <LDModal show={showPopup} onHide={handleClick} />
    </>
  );
};
