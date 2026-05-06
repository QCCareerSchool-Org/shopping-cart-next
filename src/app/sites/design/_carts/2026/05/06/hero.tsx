'use client';

import type { FC } from 'react';

import DesktopCAON from './desktop-ca-on.jpg';
import DesktopCAONEnds from './desktop-ends-ca-on.jpg';
import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileCAON from './mobile-ca-on.jpg';
import MobileCAONEnds from './mobile-ends-ca-on.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { useAddressState } from '@/hooks/useAddressState';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260506: FC<Props> = ({ variant }) => {
  const { countryCode, provinceCode } = useAddressState();

  const [ desktopSrc, mobileSrc ] = variant === 'lastChance'
    ? countryCode === 'CA' && provinceCode === 'ON' ? [ DesktopCAONEnds, MobileCAONEnds ] : [ DesktopEnds, MobileEnds ]
    : countryCode === 'CA' && provinceCode === 'ON' ? [ DesktopCAON, MobileCAON ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};
