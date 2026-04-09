'use client';

import type { FC } from 'react';

import { Hero20260409 } from './hero';
import { AllAccessModal } from '@/app/sites/event/all-access-program/modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useAddressState } from '@/hooks/useAddressState';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#02022a';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Event20260409Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = typeof period.lastChance !== 'undefined' && date >= period.lastChance ? 'lastChance' : undefined;
  const { countryCode, provinceCode } = useAddressState();

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
          <Hero20260409 variant={variant} />
        </div>
      </Section>
      <AllAccessModal show={showPopup} onHide={handleClick} countryCode={countryCode} provinceCode={provinceCode} />
    </>
  );
};
