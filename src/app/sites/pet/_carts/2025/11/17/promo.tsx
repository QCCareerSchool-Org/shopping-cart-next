'use client';

import type { FC } from 'react';

import { Hero20251117 } from './hero';
import { Pet20251117Modal } from './modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = 'black';
const lastChanceDate = Date.UTC(2025, 10, 28, 8); // 2025-11-28T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 10, 29, 8); // 2025-11-29T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Pet20251117Promo: FC<Props> = ({ date }) => {
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
      <Banner variant={variant} badgeImageSrc={null} lastChanceImageSrc={null} onClick={handleClick} backgroundColor="#e00000">
        {variant === 'lastChance'
          ? <>Last Chance for Black Friday</>
          : <>Don&apos;t Miss the Black Friday Offer</>
        }
      </Banner>
      <Section style={{ backgroundColor }} noPadding>
        <a href="#courses">
          <Hero20251117 variant={variant} />
        </a>
      </Section>
      <Pet20251117Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
