import { Suspense } from 'react';

import { Design20240912 } from './_carts/2024/09/12';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 8, 12, 12) && date < Date.UTC(2024, 8, 21, 4) // September 12, 2024 at 08:00 (12:00 UTC) to September 21, 2024 at 00:00 (04:00 UTC)
        ? <Design20240912 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
