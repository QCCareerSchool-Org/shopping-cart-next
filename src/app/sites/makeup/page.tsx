import { Suspense } from 'react';

import { Makeup20241007 } from './_carts/2024/10/07';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 9, 7, 12) && date < Date.UTC(2024, 9, 17, 4) // October 7, 2024 at 08:00 (12:00 UTC) to October 17, 2024 at 00:00 (04:00 UTC)
        ? <Makeup20241007 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
