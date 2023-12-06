import { Suspense } from 'react';

import { WritingFallback } from './_default/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      <WritingFallback date={date} />
    </Suspense>
  );
};

export default DesignPage;
