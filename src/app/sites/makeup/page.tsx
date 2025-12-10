import { Suspense } from 'react';

import { Makeup20251211 } from './_carts/2025/12/11';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      { date >= Date.UTC(2025, 11, 11, 8) && date < Date.UTC(2025, 11, 20, 8) // 2025-12-11T03:00 (8:00 UTC) to 2025-12-20T03:00 (8:00 UTC)
        ? <Makeup20251211 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
