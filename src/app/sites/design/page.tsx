import { Suspense } from 'react';

import { Design20241023 } from './_carts/2024/10/23';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 9, 23, 12) && date < Date.UTC(2024, 10, 2, 4) // October 23, 2024 at 08:00 (12:00 UTC) to November 2, 2024 at 00:00 (04:00 UTC)
        ? <Design20241023 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
