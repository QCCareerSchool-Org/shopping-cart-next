'use client';

import type { FC } from 'react';

import { Hero20260923 } from './hero';
import { Design20260806Modal } from '../../08/06/modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#d85223';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Design20260923Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const priceState = usePriceState();
  const variant = typeof period.lastChance !== 'undefined' && date >= period.lastChance ? 'lastChance' : undefined;
  const bannerText = variant === 'lastChance'
    ? `You'll Also Receive an Extra ${priceState?.currency.code === 'GBP' ? '£100' : '$100'} Off Your Tuition`
    : 'You\'ll Also Receive 50% Off Each Additional Course';

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
          <Hero20260923 variant={variant} />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        {bannerText}
      </Banner>
      <Design20260806Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
