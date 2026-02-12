'use client';

import type { FC } from 'react';

import { Hero20260204 } from './hero';
import { Makeup20260204Modal } from './modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#030303';

interface Props {
  date: number;
  promotionPeriod: LastChancePeriodDTO;
}

export const Makeup20260204Promo: FC<Props> = ({ date, promotionPeriod }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = typeof promotionPeriod.lastChance !== 'undefined' && date >= promotionPeriod.lastChance ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      {promotionPeriod.lastChance && <CountDownTimerWrapper
        date={date}
        showDate={promotionPeriod.lastChance}
        endDate={promotionPeriod.end}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />}
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20260204 variant={variant} />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        You'll Also Receive <strong>50% Off Each Additional Course</strong>
      </Banner>
      <Makeup20260204Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
