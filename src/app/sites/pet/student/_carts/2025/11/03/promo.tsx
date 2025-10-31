'use client';

import type { FC } from 'react';

import { Hero20251103 } from './hero';
import { PetStudent20251103Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#030406';
const lastChanceDate = Date.UTC(2025, 10, 7, 8); // 2025-11-07T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 10, 8, 8); // 2025-11-08T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const PetStudent20251103Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20251103 />
        </div>
      </Section>
      <PetStudent20251103Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
