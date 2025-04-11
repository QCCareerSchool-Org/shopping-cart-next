import { Suspense } from 'react';

import { Design20250407 } from './_carts/2025/04/07';
import { Design20250416 } from './_carts/2025/04/16';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 3, 16, 7) && date < Date.UTC(2025, 3, 22, 7) // 2025-04-16T03:00 (07:00 UTC) to 2025-04-22T03:00 (07:00 UTC)
        ? <Design20250416 date={date} />
        : date >= Date.UTC(2025, 3, 7, 12) && date < Date.UTC(2025, 3, 16, 7) // 2025-04-07T08:00 (12:00 UTC) to 2025-04-16T03:00 (07:00 UTC)
          ? <Design20250407 date={date} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
