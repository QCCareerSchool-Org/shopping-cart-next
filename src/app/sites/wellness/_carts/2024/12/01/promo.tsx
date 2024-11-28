'use client';

import type { FC } from 'react';

import { Hero20241201 } from './hero';
import { Wellness20241201Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2024, 11, 6, 8); // 2024-12-06T03:00 (08:00 UTC)
const endDate = Date.UTC(2024, 11, 7, 8); // 2024-12-07T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Wellness20241201Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20241201 lastChance={date >= lastChanceDate} />
        </div>
      </Section>
      <Wellness20241201Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
