import { Suspense } from 'react';

import { WritingFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      <WritingFallback date={date} />
    </Suspense>
  );
};

export default DesignPage;
