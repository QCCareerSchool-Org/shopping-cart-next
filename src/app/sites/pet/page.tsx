import { lazy, Suspense } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.PetFallback })));

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      <PetFallback date={date} />
    </Suspense>
  );
};

export default DesignPage;
