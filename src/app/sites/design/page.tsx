import { Suspense } from 'react';

import { Design20250507 } from './_carts/2025/05/07';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 4, 7, 7) && date < Date.UTC(2025, 4, 17, 7) // 2025-05-07T03:00 (07:00 UTC) to 2025-05-17T03:00 (07:00 UTC)
        ? <Design20250507 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
