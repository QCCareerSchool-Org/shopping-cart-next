'use client';

import type { FC } from 'react';

import { POHero } from './hero';
import { POModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';

interface Props {
  date: number;
}

export const POPromo: FC<Props> = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <POHero />
        </div>
      </Section>
      <POModal show={showPopup} onHide={handleClick} />
    </>
  );
};
