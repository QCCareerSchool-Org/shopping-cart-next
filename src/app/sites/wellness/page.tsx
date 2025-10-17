import { Suspense } from 'react';

import { Wellness20251007 } from './_carts/2025/10/07';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 9, 7, 12) && date < Date.UTC(2025, 9, 22, 16) // 2025-10-07T08:00 (12:00 UTC) to 2025-10-22T12:00 (16:00 UTC)
        ? <Wellness20251007 date={date} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
