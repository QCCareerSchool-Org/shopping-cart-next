'use client';

import type { FC } from 'react';

import { FDHero } from './hero';
import { FDModal } from './modal';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';

type Props = {
  date: number;
};

export const FDPromo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <FDHero />
        </div>
      </Section>
      <FDModal show={showPopup} onHide={handleClick} />
    </>
  );
};
