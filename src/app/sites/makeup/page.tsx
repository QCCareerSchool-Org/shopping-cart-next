import { Suspense } from 'react';

import { Makeup20250407 } from './_carts/2025/04/07';
import { Makeup20250416 } from './_carts/2025/04/16';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 3, 16, 7) && date < Date.UTC(2025, 3, 22, 7) // 2025-04-16T03:00 (07:00 UTC) to 2025-04-22T03:00 (07:00 UTC)
        ? <Makeup20250416 date={date} />
        : date >= Date.UTC(2025, 3, 7, 12) && date < Date.UTC(2025, 3, 16, 7) // 2025-04-07T08:00 (12:00 UTC) to 2025-04-16T03:00 (07:00 UTC)
          ? <Makeup20250407 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
