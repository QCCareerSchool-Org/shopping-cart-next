'use client';

import type { FC } from 'react';

import { Hero20251103 } from './hero';
import { Wellness20251103Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';
import { Banner } from './banner';

const backgroundColor = '#40474F';
const lastChanceDate = Date.UTC(2025, 10, 7, 7); // 2025-11-07T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 10, 8, 7); // 2025-11-08T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Wellness20251103Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <a href="#courses">
          <Hero20251103 variant={variant} />
        </a>
      </Section>
      <Wellness20251103Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-primary text-light"
      />
      <Banner variant={variant} onClick={handleClick} />
    </>
  );
};
