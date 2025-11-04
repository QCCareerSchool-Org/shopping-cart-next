'use client';

import type { FC } from 'react';

import { Banner } from './banner';
import { Hero20251110 } from './hero';
import { Event20251110Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#402515';
const lastChanceDate = Date.UTC(2025, 10, 14, 8); // 2025-11-14T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 10, 15, 8); // 2025-11-15T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Event20251110Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <a href="#courses">
          <Hero20251110 variant={variant} />
        </a>
      </Section>
      <Event20251110Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
      <Banner variant={variant} onClick={handleClick} />
    </>
  );
};
