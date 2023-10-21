import { useContext } from 'react';

import { OverridesStateContext } from '@/providers/overridesProvider';
import type { OverridesState } from '@/state/overrides';

export const useOverridesState = (): OverridesState => {
  const context = useContext(OverridesStateContext);
  if (typeof context === 'undefined') {
    throw Error('useOverridesState must be used inside of a OverridesProvider');
  }
  return context;
};
