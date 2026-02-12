'use client';

import type { FC } from 'react';

import { Hero20260213 } from './hero';
import { PetStudent20260213Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#030406';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const PetStudent20260213Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20260213 />
        </div>
      </Section>
      <PetStudent20260213Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={period.lastChance}
        endDate={period.end}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
