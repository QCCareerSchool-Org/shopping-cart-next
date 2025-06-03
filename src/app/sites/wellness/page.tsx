import { Suspense } from 'react';

import { Wellness20250604 } from './_carts/2025/06/04';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 5, 4, 12) && date < Date.UTC(2025, 5, 14, 7) // 2025-06-04T08:00 (12:00 UTC) to 2025-06-14T03:00 (07:00 UTC)
        ? <Wellness20250604 date={date} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
