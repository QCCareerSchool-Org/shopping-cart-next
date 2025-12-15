'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Makeup20240420Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = 'white';
const lastChanceDate = Date.UTC(2024, 3, 26, 4); // 2024-04-26T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 4, 1, 4); // 2024-05-01T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Makeup20240420Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <Makeup20240420Modal show={showPopup} onHide={handleClick} />
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
