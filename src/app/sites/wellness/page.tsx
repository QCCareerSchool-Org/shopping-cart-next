import { Suspense } from 'react';

import { Wellness20250806 } from './_carts/2025/08/06';
import { Wellness20250820 } from './_carts/2025/08/20';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 7, 6, 12) && date < Date.UTC(2025, 7, 16, 7) // 2025-08-20T8:00 (12:00 UTC) to 2025-08-26T03:00 (07:00 UTC)
        ? <Wellness20250820 date={date} />
        : date >= Date.UTC(2025, 7, 6, 12) && date < Date.UTC(2025, 7, 16, 7) // 2025-08-06T08:00 (12:00 UTC) to 2025-08-16T03:00 (07:00 UTC)
          ? <Wellness20250806 date={date} />
          : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;

// 2025-08-20T8:00 (12:00 UTC) to 2025-08-26T03:00 (07:00 UTC)
