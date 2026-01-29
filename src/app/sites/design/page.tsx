import { Suspense } from 'react';

import { Design20260107 } from './_carts/2026/01/07';
import { Design20260121 } from './_carts/2026/01/21';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2026, 0, 21, 8) // && date < Date.UTC(2026, 0, 31, 8) // 2026-01-21T03:00 (08:00 UTC) to 2026-01-31T03:00 (08:00 UTC)
        ? <Design20260121 date={date} />
        : date >= Date.UTC(2026, 0, 5, 8) && date < Date.UTC(2026, 0, 21, 8) // 2026-01-05T03:00 (8:00 UTC) to 2026-01-21T03:00 (8:00 UTC)
          ? <Design20260107 date={date} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
