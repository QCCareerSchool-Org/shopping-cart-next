import type { FC } from 'react';
import { memo } from 'react';

import { Icon } from './icon';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const ScrollIndicator: FC = memo(() => {
  const scrollPosition = useScrollPosition();
  const screenWidth = useScreenWidth();

  const maxScroll = getMaxScroll(screenWidth);
  console.log(screenWidth, maxScroll);

  return <Icon scrollPosition={scrollPosition} maxScroll={maxScroll} />;
});

ScrollIndicator.displayName = 'ScrollIndicator';

const getMaxScroll = (screenWidth: number): number => {
  if (screenWidth >= 992) {
    return 1700;
  }
  if (screenWidth >= 768) {
    return 1500;
  }
  if (screenWidth >= 576) {
    return 1900;
  }

  return 2200;
};
