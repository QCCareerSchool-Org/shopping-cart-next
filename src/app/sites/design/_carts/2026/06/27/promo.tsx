'use client';

import type { FC } from 'react';

import { Hero20260627 } from './hero';
import { Design20260627Modal } from './modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useAddressState } from '@/hooks/useAddressState';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#333d37';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Design20260627Promo: FC<Props> = ({ date, period }) => {
  const { countryCode } = useAddressState();
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = typeof period.lastChance !== 'undefined' && date >= period.lastChance ? 'lastChance' : undefined;
  const bannerText = countryCode === 'CA'
    ? 'Canada Day Special: Free Textbooks Included'
    : countryCode === 'US'
      ? '4th of July Special: Free Textbooks Included!'
      : 'You\'ll Also Receive Free Printed Textbooks.';

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
        {bannerText}
      </Banner>
      <Design20260627Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
