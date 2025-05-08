import { Suspense } from 'react';

import { Makeup20250507 } from './_carts/2025/05/07';
import { Makeup20250522 } from './_carts/2025/05/22';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 4, 7, 7) && date < Date.UTC(2025, 4, 9, 7) // 2025-05-07T03:00 (07:00 UTC) to 2025-05-09T03:00 (07:00 UTC)
        ? <Makeup20250507 date={date} />
        : date >= Date.UTC(2025, 4, 22, 7) && date < Date.UTC(2025, 4, 30, 7) // 2025-05-22T03:00 (07:00 UTC) to 2025-05-30T03:00 (07:00 UTC)
          ? <Makeup20250522 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
