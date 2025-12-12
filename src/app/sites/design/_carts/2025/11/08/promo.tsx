'use client';

import type { FC } from 'react';

import { Banner } from './banner';
import { Hero20251108 } from './hero';
import { Design20251108Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#0E0808';
const lastChanceDate = Date.UTC(2025, 10, 14, 8); // 2025-11-14T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 10, 15, 8); // 2025-11-15T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const Design20251108Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <a href="#courses">
          <Hero20251108 variant={variant} />
        </a>
      </Section>
      <Design20251108Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
        newHaus
      />
      <Banner variant={variant} onClick={handleClick} />
    </>
  );
};
