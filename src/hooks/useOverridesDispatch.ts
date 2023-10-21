import type { Dispatch } from 'react';
import { useContext } from 'react';

import { OverridesDispatchContext } from '@/providers/overridesProvider';
import type { OverridesAction } from '@/state/overrides';

export const useOverridesDispatch = (): Dispatch<OverridesAction> => {
  const context = useContext(OverridesDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('useOverridesDispatch must be used inside of a OverridesProvider');
  }
  return context;
};
