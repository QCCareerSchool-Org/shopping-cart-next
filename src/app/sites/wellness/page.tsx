import { Suspense } from 'react';

import { Wellness20250820 } from './_carts/2025/08/20';
import { Wellness20250827 } from './_carts/2025/08/27';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 7, 20, 12) && date < Date.UTC(2025, 7, 27, 12) // 2025-08-20T8:00 (12:00 UTC) to 2025-08-27T08:00 (12:00 UTC)
        ? <Wellness20250820 date={date} />
        : date >= Date.UTC(2025, 7, 27, 12) && date < Date.UTC(2025, 8, 8, 7) // 2025-08-27T08:00 (12:00 UTC) to 2025-09-08T03:00 (07:00 UTC)
          ? <Wellness20250827 date={date} />
          : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
