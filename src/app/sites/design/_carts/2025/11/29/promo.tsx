'use client';

import type { FC } from 'react';

import { Hero20251129 } from './hero';
import { Design20251129Modal } from './modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#50463A';
const lastChanceDate = Date.UTC(2025, 11, 5, 8); // 2025-12-05T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 11, 6, 8); // 2025-12-06T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const Design20251129Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
      <Section style={{ backgroundColor }} noPadding>
        <a href="#courses">
          <Hero20251129 variant={variant} />
        </a>
      </Section>
      <Banner variant={variant} badgeImageSrc={null} lastChanceImageSrc={null} onClick={handleClick} backgroundColor="#e00000">
        {variant === 'lastChance'
          ? <strong>Last Chance for Cyber Week</strong>
          : <strong>Don&apos;t Miss the Cyber Week Offer</strong>
        }
      </Banner>
      <Design20251129Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
