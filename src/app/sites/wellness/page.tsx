import { Suspense } from 'react';

import { Wellness20250206 } from './_carts/2025/02/06';
import { Wellness20250216 } from './_carts/2025/02/16';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 16, 8) && date < Date.UTC(2025, 1, 23, 8) // 2025-02-16T03:00 (08:00 UTC) to 2025-02-23T03:00 (08:00 UTC)
        ? <Wellness20250216 date={date} />
        : date >= Date.UTC(2025, 1, 6, 8) && date < Date.UTC(2025, 1, 16, 8) // 2025-02-06T03:00 (08:00 UTC) to 2025-02-16T03:00 (08:00 UTC)
          ? <Wellness20250206 date={date} />
          : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
