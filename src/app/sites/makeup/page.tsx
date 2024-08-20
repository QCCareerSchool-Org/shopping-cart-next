import { Suspense } from 'react';

import { Makeup20240821 } from './_carts/2024/08/21';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 7, 21, 13, 30) && date < Date.UTC(2024, 8, 7, 4) // August 21, 2024 at 09:30 (13:30 UTC) to September 7, 2024 at 00:00 (04:00 UTC)
        ? <Makeup20240821 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
