import { Suspense } from 'react';

import { Design20241213 } from './_carts/2024/12/13';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>

      {date < Date.UTC(2024, 11, 19, 8) // 2024-12-19T03:00 (08:00 UTC)
        ? <Design20241213 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
