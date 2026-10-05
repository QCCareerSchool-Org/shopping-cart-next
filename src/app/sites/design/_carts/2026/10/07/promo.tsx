'use client';

import type { FC } from 'react';

import { Hero20261007 } from './hero';
import { Design20260806Modal } from '../../08/06/modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#fdefe3';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Design20261007Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= period.lastChance ? 'lastChance' : undefined;
  const bannerText = 'You\'ll Also Receive 50% Off Each Additional Course';

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
          <Hero20261007 variant={variant} />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        {bannerText}
      </Banner>
      <Design20260806Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
