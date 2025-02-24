import { Suspense } from 'react';

import { Design20250225 } from './_carts/2025/02/25';
import { Design20250305 } from './_carts/2025/03/05';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 25, 8) && date < Date.UTC(2025, 2, 1, 8) // 2025-02-25T03:00 (08:00 UTC) to 2025-03-01T03:00 (08:00 UTC)
        ? <Design20250225 date={date} />
        : date >= Date.UTC(2025, 2, 5, 5) && date < Date.UTC(2025, 2, 11, 7) // 2025-03-05T00:00 (05:00 UTC) to 2025-03-11T03:00 (07:00 UTC)
          ? <Design20250305 date={date} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
