import { Suspense } from 'react';

import { Design20240708 } from './_carts/2024/07/08';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 6, 8, 13, 30) && date < Date.UTC(2024, 6, 19, 4) // July 8, 2024 at 09:30 (13:30 UTC) to July 19, 2024 at 00:00 (04:00 UTC)
        ? <Design20240708 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
