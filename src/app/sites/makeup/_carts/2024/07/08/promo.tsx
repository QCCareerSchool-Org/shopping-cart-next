'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Makeup20240708Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#131f2e';
const lastChanceDate = Date.UTC(2024, 6, 14, 13, 30); // 2024-07-14T09:30 (13:30 UTC)
const endDate = Date.UTC(2024, 6, 19, 4); // 2024-07-19T00:00 (04:00 UTC)

type Props = {
  date: number;
};

export const Makeup20240708Promo: FC<Props> = ({ date }) => {
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
      <Makeup20240708Modal show={showPopup} onHide={handleClick} />
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
