'use client';

import type { FC } from 'react';

import { Hero20260204 } from './hero';
import { Makeup20260204Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';
import type { PromotionPeriodObject } from '@/lib/promotionPeriod';

const backgroundColor = '#030303';

interface Props {
  date: number;
  promotionPeriod: PromotionPeriodObject;
}

export const Makeup20260204Promo: FC<Props> = ({ date, promotionPeriod }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = typeof promotionPeriod.lastChance !== 'undefined' && date >= promotionPeriod.lastChance ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20260204 variant={variant} />
        </div>
      </Section>
      {promotionPeriod.lastChance && <CountDownTimerWrapper
        date={date}
        showDate={promotionPeriod.lastChance}
        endDate={promotionPeriod.end}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />}
      <Makeup20260204Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
