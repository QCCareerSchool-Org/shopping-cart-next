import { Suspense } from 'react';

import { Makeup20241115 } from './_carts/2024/11/15';
import { Makeup20241201 } from './_carts/2024/12/01';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2024, 11, 1, 8)
        ? <Makeup20241115 date={date} />
        : date >= Date.UTC(2024, 11, 1, 8) && date < Date.UTC(2024, 11, 8, 8) // December 1, 2024 at 03:00 (08:00 UTC) to December 8, 2024 at 03:00 (08:00 UTC)
          ? <Makeup20241201 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
