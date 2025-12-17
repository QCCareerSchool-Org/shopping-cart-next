import { Suspense } from 'react';

import { Design20251211 } from './_carts/2025/12/11';
import { Design20251226 } from './_carts/2025/12/26';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      { date >= Date.UTC(2025, 11, 11, 8) && date < Date.UTC(2025, 11, 20, 8) // 2025-12-11T03:00 (8:00 UTC) to 2025-12-20T03:00 (8:00 UTC)
        ? <Design20251211 date={date} />
        : date >= Date.UTC(2025, 11, 26, 8) && date < Date.UTC(2026, 0, 3, 8) // 2025-12-26T03:00 (8:00 UTC) to 2026-01-03T03:00 (8:00 UTC)
          ? <Design20251226 date={date} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
