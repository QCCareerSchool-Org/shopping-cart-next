'use client';

import type { FC } from 'react';

import { Hero20260909 } from './hero';
import { Grooming20260909Modal } from './modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#c8e1ed';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Grooming20260909Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = typeof period.lastChance !== 'undefined' && date >= period.lastChance ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      {period.lastChance && <CountDownTimerWrapper
        date={date}
        showDate={period.lastChance}
        endDate={period.end}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />}
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20260909 variant={variant} />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        You'll Also Receive a <strong>FREE Professional Grooming Kit</strong>
      </Banner>
      <Grooming20260909Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
