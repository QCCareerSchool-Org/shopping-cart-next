import { useContext } from 'react';

import { MetaStateContext } from '@/providers/metaProvider';
import type { MetaState } from '@/state/meta';

export const useMetaState = (): MetaState => {
  const context = useContext(MetaStateContext);
  if (typeof context === 'undefined') {
    throw Error('useMetaState must be used inside of a MetaProvider');
  }
  return context;
};
