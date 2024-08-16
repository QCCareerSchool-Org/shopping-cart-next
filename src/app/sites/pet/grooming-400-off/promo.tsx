'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { PetGrooming400OffModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#000';

export const PetGrooming500OffPromo: FC = () => {
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
      <PetGrooming400OffModal show={showPopup} onHide={handleClick} />
    </>
  );
};
