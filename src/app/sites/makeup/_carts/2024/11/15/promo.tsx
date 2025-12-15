'use client';

import type { FC } from 'react';

import { Hero20241115 } from './hero';
import { Makeup20241115Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#040404';
const lastChanceDate = Date.UTC(2024, 10, 29, 8); // 2024-11-29T03:00 (08:00 UTC)
const endDate = Date.UTC(2024, 10, 30, 8); // 2024-11-30T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const Makeup20241115Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20241115 lastChance={date >= lastChanceDate} />
        </div>
      </Section>
      <Makeup20241115Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};
