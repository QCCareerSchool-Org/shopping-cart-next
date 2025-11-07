import { Suspense } from 'react';

import { Wellness20251103 } from './_carts/2025/11/03';
import { Wellness20251108 } from './_carts/2025/11/08';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 3, 13) && date < Date.UTC(2025, 10, 8, 8) // 2025-11-03T08:00 (13:00 UTC) to 2025-11-08T03:00 (08:00 UTC)
        ? <Wellness20251103 date={date} />
        : date >= Date.UTC(2025, 10, 8, 8) && date < Date.UTC(2025, 10, 15, 8) // 2025-11-08T03:00 (08:00 UTC) to 2025-11-15T03:00 (08:00 UTC)
          ? <Wellness20251108 date={date} />
          : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
