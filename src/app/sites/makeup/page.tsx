import { Suspense } from 'react';

import { Makeup20250110 } from './_carts/2025/01/10';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 0, 10, 8) && date < Date.UTC(2025, 0, 19, 8) // 2025-01-10T03:00 (08:00 UTC) to 2025-01-19T03:00 (08:00 UTC)
        ? <Makeup20250110 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
