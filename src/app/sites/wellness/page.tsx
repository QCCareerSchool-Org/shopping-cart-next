import { Suspense } from 'react';

import { Wellness20250710 } from './_carts/2025/07/10';
import { Wellness20250723 } from './_carts/2025/07/23';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 6, 10, 12) && date < Date.UTC(2025, 6, 19, 7) // 2025-07-10T08:00 (12:00 UTC) to 2025-07-19T03:00 (07:00 UTC)
        ? <Wellness20250710 date={date} />
        : date >= Date.UTC(2025, 6, 23, 12) && date < Date.UTC(2025, 7, 2, 12) // 2025-07-23T08:00 (12:00 UTC) to 2025-08-02T03:00 (12:00 UTC)
          ? <Wellness20250723 date={date} />
          : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
