import { Suspense } from 'react';

import { Makeup20241213 } from './_carts/2024/12/13';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2024, 11, 19, 8) // 2024-12-19T03:00 (08:00 UTC)
        ? <Makeup20241213 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
