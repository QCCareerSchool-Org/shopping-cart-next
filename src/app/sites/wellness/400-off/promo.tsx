'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Wellness400Modal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#AFB0B4';

export const Wellness400OffPromo: FC = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <Wellness400Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
