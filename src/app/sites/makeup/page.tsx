import { Suspense } from 'react';

import { Makeup20250122 } from './_carts/2025/01/22';
import { Makeup20250129 } from './_carts/2025/01/29';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 0, 22, 8) && date < Date.UTC(2025, 0, 29, 8) // 2025-01-22T03:00 (08:00 UTC) to 2025-01-29T03:00 (08:00 UTC)
        ? <Makeup20250122 date={date} />
        : date >= Date.UTC(2025, 0, 22, 8) && date < Date.UTC(2025, 1, 1, 8) // 2025-01-29T03:00 (08:00 UTC) to 2025-02-01T03:00 (08:00 UTC)
          ? <Makeup20250129 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
