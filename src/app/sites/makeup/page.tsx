import { Suspense } from 'react';

import { Makeup20250407 } from './_carts/2025/04/07';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 3, 7, 12) && date < Date.UTC(2025, 3, 13, 7) // 2025-04-07T08:00 (12:00 UTC) to 2025-04-13T03:00 (07:00 UTC)
        ? <Makeup20250407 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
