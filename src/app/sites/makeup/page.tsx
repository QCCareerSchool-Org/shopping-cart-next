import { Suspense } from 'react';

import { Makeup20250206 } from './_carts/2025/02/06';
import { Makeup20250305 } from './_carts/2025/03/05';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 25, 8) && date < Date.UTC(2025, 2, 1, 8) // 2025-02-25T03:00 (08:00 UTC) to 2025-03-01T03:00 (08:00 UTC)
        ? <Makeup20250305 date={date} />
        : date >= Date.UTC(2025, 2, 5, 5) && date < Date.UTC(2025, 2, 11, 7) // 2025-03-05T00:00 (05:00 UTC) to 2025-03-11T03:00 (07:00 UTC)
          ? <Makeup20250206 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
