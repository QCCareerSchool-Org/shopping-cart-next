import type { Dispatch } from 'react';
import { useContext } from 'react';

import { MetaDispatchContext } from '@/providers/metaProvider';
import type { MetaAction } from '@/state/meta';

export const useMetaDispatch = (): Dispatch<MetaAction> => {
  const context = useContext(MetaDispatchContext);
  if (typeof context === 'undefined') {
    throw Error('useMetaDispatch must be used inside of a MetaProvider');
  }
  return context;
};
