import { Suspense } from 'react';

import { Design20251117 } from './_carts/2025/11/17';
import { Design20251129 } from './_carts/2025/11/29';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 17, 5) && date < Date.UTC(2025, 10, 29, 8) // 2025-11-17T00:00 (5:00 UTC) to 2025-11-29T03:00 (8:00 UTC)
        ? <Design20251117 date={date} />
        : date >= Date.UTC(2025, 10, 29, 8) && date < Date.UTC(2025, 11, 6, 8) // 2025-11-29T03:00 (8:00 UTC) to 2025-12-06T03:00 (8:00 UTC)
          ? <Design20251129 date={date} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
