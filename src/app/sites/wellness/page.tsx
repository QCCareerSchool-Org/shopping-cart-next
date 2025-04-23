import { Suspense } from 'react';

import { Wellness20250416 } from './_carts/2025/04/16';
import { Wellness20250423 } from './_carts/2025/04/23';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 3, 16, 7) && date < Date.UTC(2025, 3, 22, 7) // 2025-04-16T03:00 (07:00 UTC) to 2025-04-22T03:00 (07:00 UTC)
        ? <Wellness20250416 date={date} />
        : date >= Date.UTC(2025, 3, 23, 7) && date < Date.UTC(2025, 4, 3, 7) // 2025-04-23T03:00 (07:00 UTC) to 2025-05-03T03:00 (07:00 UTC)
          ? <Wellness20250423 date={date} />
          : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
