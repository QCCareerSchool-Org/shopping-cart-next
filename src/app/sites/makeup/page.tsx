import { Suspense } from 'react';

import { Makeup20250507 } from './_carts/2025/05/07';
import { Makeup20250514 } from './_carts/2025/05/14';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 4, 7, 7) && date < Date.UTC(2025, 4, 10, 7) // 2025-05-07T03:00 (07:00 UTC) to 2025-05-10T03:00 (07:00 UTC)
        ? <Makeup20250507 date={date} />
        : date >= Date.UTC(2025, 4, 14, 4) && date < Date.UTC(2025, 4, 25, 7) // 2025-05-14T00:00 (04:00 UTC) to 2025-05-25T03:00 (07:00 UTC)
          ? <Makeup20250514 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
