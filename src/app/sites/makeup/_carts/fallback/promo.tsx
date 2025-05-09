'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { MakeupFallbackModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fb0363';

export const MakeupFallbackPromo: FC = () => {
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
      <MakeupFallbackModal show={showPopup} onHide={handleClick} />
    </>
  );
};
