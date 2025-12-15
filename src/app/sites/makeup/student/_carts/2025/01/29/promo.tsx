'use client';

import type { FC } from 'react';

import { Hero20250129 } from './hero';
import { MakeupStudent20250129Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#84796c';
const lastChanceDate = Date.UTC(2025, 0, 17, 8); // 2025-01-17T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 0, 18, 8); // 2025-01-18T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const MakeupStudent20250129Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250129 />
        </div>
      </Section>
      <MakeupStudent20250129Modal show={showPopup} onHide={handleClick} />
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
