'use client';

import type { FC } from 'react';

import { Hero20250110 } from './hero';
import { MakeupStudent20250110Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#7ca0b6';
const lastChanceDate = Date.UTC(2025, 0, 17, 8); // 2025-01-17T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 0, 18, 8); // 2025-01-18T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const MakeupStudent20250110Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250110 />
        </div>
      </Section>
      <MakeupStudent20250110Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};
