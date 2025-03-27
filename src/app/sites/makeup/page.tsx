import { Suspense } from 'react';

import { Makeup20250319 } from './_carts/2025/03/19';
import { Makeup20250327 } from './_carts/2025/03/27';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 2, 19, 12) && date < Date.UTC(2025, 2, 27, 7) // 2025-03-19T08:00 (12:00 UTC) to 2025-03-27T03:00 (07:00 UTC)
        ? <Makeup20250319 date={date} />
        : date >= Date.UTC(2025, 2, 27, 7) && date < Date.UTC(2025, 3, 3, 7) // 2025-03-27T03:00 (07:00 UTC) to 2025-04-03T03:00 (07:00 UTC)
          ? <Makeup20250327 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
