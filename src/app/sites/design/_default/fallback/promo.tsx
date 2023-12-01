'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { DesignFallbackModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#4f4c43';

export const DesignFallbackPromo: FC = () => {
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
      <DesignFallbackModal show={showPopup} onHide={handleClick} />
    </>
  );
};
