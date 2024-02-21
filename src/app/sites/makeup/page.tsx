import { Suspense } from 'react';

import { Makeup20240222 } from './_carts/2024/02/22';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 1, 22, 14, 30) && date < Date.UTC(2024, 2, 1, 5) // Feb 22, 2024 at 09:30 (14:30 UTC) to Mar 1, 2024 at 00:00 (05:00 UTC)
        ? <Makeup20240222 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
