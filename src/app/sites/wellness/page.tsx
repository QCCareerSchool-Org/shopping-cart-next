import { Suspense } from 'react';

import { Wellness20240404 } from './_carts/2024/04/04';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 3, 4, 13, 30) && date < Date.UTC(2024, 3, 13, 4) // April 4, 2024 at 09:30 (13:30 UTC) to April 13, 2024 at 00:00 (04:00 UTC)
        ? <Wellness20240404 date={date} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
