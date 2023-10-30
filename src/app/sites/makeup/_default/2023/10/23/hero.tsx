import Image from 'next/image';
import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { useScreenWidth } from '@/hooks/useScreenWidth';

type Props = {
  lastChance?: boolean;
};

export const Hero: FC<Props> = props => {
  const screenWidth = useScreenWidth();
  const mdOrLarger = screenWidth >= 576;

  if (screenWidth === 0) {
    return null;
  }

  if (props.lastChance) {
    return mdOrLarger
      ? <Image src={DesktopEnds} priority alt="" className="img-fluid" style={{ width: '100%' }} />
      : <Image src={MobileEnds} priority alt="" className="img-fluid" style={{ width: '100%' }} />;
  }

  return mdOrLarger
    ? <Image src={Desktop} priority alt="" className="img-fluid" style={{ width: '100%' }} />
    : <Image src={Mobile} priority alt="" className="img-fluid" style={{ width: '100%' }} />;
};
