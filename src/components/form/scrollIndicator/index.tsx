import type { FC } from 'react';
import { memo } from 'react';

import { Icon } from './icon';
import { Tracker } from './tracker';

type Props = {
  scrolledFarEnough: boolean;
};

export const ScrollIndicator: FC<Props> = memo(({ scrolledFarEnough }) => {
  return (
    <Tracker scrolledFarEnough={scrolledFarEnough}>
      <Icon />
    </Tracker>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';
