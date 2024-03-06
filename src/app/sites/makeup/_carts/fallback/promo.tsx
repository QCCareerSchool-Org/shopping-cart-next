'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { MakeupFallbackModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

type Props = {
  newPromo: boolean;
};

export const MakeupFallbackPromo: FC<Props> = ({ newPromo }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const backgroundColor = newPromo ? 'black' : '#131f2e';

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero newPromo={newPromo} />
        </div>
      </Section>
      <MakeupFallbackModal newPromo={newPromo} show={showPopup} onHide={handleClick} />
    </>
  );
};
