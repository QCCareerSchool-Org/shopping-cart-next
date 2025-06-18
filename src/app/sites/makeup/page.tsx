import { Suspense } from 'react';

import { Makeup20250614 } from './_carts/2025/06/14';
import { Makeup20250620 } from './_carts/2025/06/20';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 5, 20, 7) && date < Date.UTC(2025, 6, 1, 7) // 2025-05-20T03:00 (07:00 UTC) to 2025-06-01T03:00 (07:00 UTC)
        ? <Makeup20250620 date={date} />
        : date >= Date.UTC(2025, 5, 14, 12) && date < Date.UTC(2025, 5, 17, 7) // 2025-06-14T8:00 (12:00 UTC) to 2025-06-17T03:00 (07:00 UTC)
          ? <Makeup20250614 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
