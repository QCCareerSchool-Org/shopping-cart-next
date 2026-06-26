'use client';

import type { FC } from 'react';

import { Hero20260627 } from './hero';
import { Makeup20260627Modal } from './modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useAddressState } from '@/hooks/useAddressState';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#010102';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Makeup20260627Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const { countryCode } = useAddressState();
  const bannerText = countryCode === 'CA'
    ? 'Canada Day Special: Receive 50% Off Each Additional Course'
    : countryCode === 'US'
      ? '4th of July Special: Receive 50% Off Each Additional Course'
      : 'You\'ll Also Receive 50% Off Each Additional Course.';

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
          <Hero20260627 />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        {bannerText}
      </Banner>
      <Makeup20260627Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
