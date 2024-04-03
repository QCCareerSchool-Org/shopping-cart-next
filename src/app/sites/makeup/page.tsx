import { Suspense } from 'react';

import { Makeup20240404 } from './_carts/2024/04/04';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 3, 4, 13, 30) && date < Date.UTC(2024, 3, 13, 4) // April 4, 2024 at 09:30 (13:30 UTC) to April 13, 2024 at 00:00 (04:00 UTC)
        ? <Makeup20240404 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
