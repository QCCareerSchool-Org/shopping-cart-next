'use client';

import type { FC } from 'react';

import { Hero20261021 } from './hero';
import { Design20260806Modal } from '../../08/06/modal';
import { Banner } from '@/components/banner';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';
import type { LastChanceWithExtensionPeriodDTO } from '@/lib/period';

const backgroundColor = '#d85223';

interface Props {
  date: number;
  period: LastChanceWithExtensionPeriodDTO;
}

export const Design20261021Promo: FC<Props> = ({ date, period }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= period.extension ? 'extension' : date >= period.lastChance ? 'lastChance' : undefined;

  const bannerText = 'You\'ll Also Receive 50% Off Each Additional Course';

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      {variant === 'lastChance' && <CountDownTimerWrapper date={date} showDate={period.lastChance} endDate={period.extension} message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>} className="bg-black text-light" />}
      {variant === 'extension' && <CountDownTimerWrapper date={date} showDate={period.extension} endDate={period.end} message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>} className="bg-black text-light" />}
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20261021 variant={variant} />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        {bannerText}
      </Banner>
      <Design20260806Modal show={showPopup} onHide={handleClick} />
    </>
  );
};
