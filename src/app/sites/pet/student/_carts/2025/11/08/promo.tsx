'use client';

import type { FC } from 'react';

import { Hero20251108 } from './hero';
import { PetStudent20251108Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#030406';
const lastChanceDate = Date.UTC(2025, 10, 28, 8); // 2025-11-28T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 10, 29, 8); // 2025-11-29T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const PetStudent20251108Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20251108 />
        </div>
      </Section>
      <PetStudent20251108Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
