import { Suspense } from 'react';

import { Makeup20251117 } from './_carts/2025/11/17';
import { Makeup20251129 } from './_carts/2025/11/29';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 17, 5) && date < Date.UTC(2025, 10, 29, 8) // 2025-11-17T00:00 (5:00 UTC) to 2025-11-29T03:00 (8:00 UTC)
        ? <Makeup20251117 date={date} />
        : date >= Date.UTC(2025, 10, 29, 8) && date < Date.UTC(2025, 11, 6, 8) // 2025-11-29T03:00 (8:00 UTC) to 2025-12-06T03:00 (8:00 UTC)
          ? <Makeup20251129 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
