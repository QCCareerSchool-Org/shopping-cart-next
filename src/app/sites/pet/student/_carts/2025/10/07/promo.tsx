'use client';

import type { FC } from 'react';

import { Hero20251007 } from './hero';
import { PetStudent20251007Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#030406';
const lastChanceDate = Date.UTC(2025, 9, 17, 7); // 2025-10-17T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 9, 18, 7); // 2025-10-18T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const PetStudent20251007Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20251007 />
        </div>
      </Section>
      <PetStudent20251007Modal show={showPopup} onHide={handleClick} />
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
