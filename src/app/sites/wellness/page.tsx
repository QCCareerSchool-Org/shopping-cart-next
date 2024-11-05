import { Suspense } from 'react';

import { Wellness20241106 } from './_carts/2024/11/06';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 10, 6, 13) && date < Date.UTC(2024, 10, 13, 4) // November 6, 2024 at 08:00 (13:00 UTC) to November 13, 2024 at 00:00 (04:00 UTC)
        ? <Wellness20241106 date={date} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
