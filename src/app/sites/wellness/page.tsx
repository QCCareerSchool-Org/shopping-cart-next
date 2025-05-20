import { Suspense } from 'react';

import { Wellness20250522 } from './_carts/2025/05/22';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 4, 22, 7) && date < Date.UTC(2025, 4, 30, 7) // 2025-05-22T03:00 (07:00 UTC) to 2025-05-30T03:00 (07:00 UTC)
        ? <Wellness20250522 date={date} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
