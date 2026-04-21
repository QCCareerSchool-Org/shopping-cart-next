'use client';

import type { FC } from 'react';

import DesktopDecorating from './desktop-decorating.jpg';
import DesktopDecoratingEnds from './desktop-ends-decorating.jpg';
import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileDecorating from './mobile-decorating.jpg';
import MobileDecoratingEnds from './mobile-ends-decorating.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { useAddressState } from '@/hooks/useAddressState';
import { getDesignRestricted } from '@/lib/getDesignRestricted';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260422: FC<Props> = ({ variant }) => {
  const { countryCode, provinceCode } = useAddressState();
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance'
    ? getDesignRestricted(countryCode, provinceCode) ? [ DesktopDecoratingEnds, MobileDecoratingEnds ] : [ DesktopEnds, MobileEnds ]
    : getDesignRestricted(countryCode, provinceCode) ? [ DesktopDecorating, MobileDecorating ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};
