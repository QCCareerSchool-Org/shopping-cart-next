import { Suspense } from 'react';

import { Design20251108 } from './_carts/2025/11/08';
import { Design20251117 } from './_carts/2025/11/17';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 8, 8) && date < Date.UTC(2025, 10, 17, 5) // 2025-11-08T03:00 (8:00 UTC) to 2025-11-17T00:00 (5:00 UTC)
        ? <Design20251108 date={date} />
        : date >= Date.UTC(2025, 10, 17, 5) && date < Date.UTC(2025, 10, 29, 8) // 2025-11-17T00:00 (5:00 UTC) to 2025-11-29T03:00 (8:00 UTC)
          ? <Design20251117 date={date} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
