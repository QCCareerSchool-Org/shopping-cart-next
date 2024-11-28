import { Suspense } from 'react';

import { Design20241115 } from './_carts/2024/11/15';
import { Design20241201 } from './_carts/2024/12/01';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>

      {date < Date.UTC(2024, 11, 1, 8)
        ? <Design20241115 date={date} />
        : date >= Date.UTC(2024, 11, 1, 8) && date < Date.UTC(2024, 11, 7, 8) // December 1, 2024 at 03:00 (08:00 UTC) to December 7, 2024 at 03:00 (08:00 UTC)
          ? <Design20241201 date={date} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
