'use client';

import type { FC } from 'react';

import { FSHero } from './hero';
import { FSModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';

type Props = {
  date: number;
};

export const FSPromo: FC<Props> = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <FSHero />
        </div>
      </Section>
      <FSModal show={showPopup} onHide={handleClick} />
    </>
  );
};
