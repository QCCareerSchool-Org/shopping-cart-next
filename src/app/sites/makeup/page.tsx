import { Suspense } from 'react';

import { Makeup20240619 } from './_carts/2024/06/19';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 5, 19, 13, 30) && date < Date.UTC(2024, 5, 29, 4) // June 19, 2024 at 09:30 (13:30 UTC) to June 29, 2024 at 00:00 (04:00 UTC)
        ? <Makeup20240619 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
