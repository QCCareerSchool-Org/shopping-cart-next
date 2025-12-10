import { Suspense } from 'react';

import { Wellness20251211 } from './_carts/2025/12/11';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      { date >= Date.UTC(2025, 11, 11, 8) && date < Date.UTC(2025, 11, 20, 8) // 2025-12-11T03:00 (8:00 UTC) to 2025-12-20T03:00 (8:00 UTC)
        ? <Wellness20251211 date={date} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
