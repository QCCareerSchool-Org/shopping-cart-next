'use client';

import type { FC } from 'react';

import { STHero } from './hero';
import { STModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';

type Props = {
  date: number;
};

export const STPromo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <STHero />
        </div>
      </Section>
      <STModal show={showPopup} onHide={handleClick} />
    </>
  );
};
