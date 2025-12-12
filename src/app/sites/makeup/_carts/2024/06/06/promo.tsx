'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Makeup20240606Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#131f2e';
const lastChanceDate = Date.UTC(2024, 5, 9, 4); // 2024-06-09T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 5, 14, 4); // 2024-06-14T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Makeup20240606Promo: FC<Props> = ({ date }) => {
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
      <Makeup20240606Modal show={showPopup} onHide={handleClick} />
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
