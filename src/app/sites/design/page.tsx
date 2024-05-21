import { Suspense } from 'react';

import { Design20240522 } from './_carts/2024/05/22';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 4, 22, 13, 30) && date < Date.UTC(2024, 5, 1, 4) // May 22, 2024 at 09:30 (13:30 UTC) to June 1, 2024 at 00:00 (04:00 UTC)
        ? <Design20240522 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
