'use client';

import type { FC } from 'react';

import { Hero20260627 } from './hero';
import { Pet20260627Modal } from './modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Pet20260627Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const priceState = usePriceState();
  const backgroundColor = priceState?.currency.code === 'CAD' ? '#c1c3ca' : priceState?.currency.code === 'USD' ? '#cba788' : '#6bc0b9';
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
          <Hero20260627 variant={variant} />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        You'll Also Receive <strong>50% Off Each Additional Course</strong>
      </Banner>
      <Pet20260627Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
