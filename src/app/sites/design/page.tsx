import { Suspense } from 'react';

import { Design20240307 } from './_carts/2024/03/07';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 2, 7, 14, 30) && date < Date.UTC(2024, 2, 16, 4) // March 7, 2024 at 09:30 (14:30 UTC) to Mar 16, 2024 at 00:00 (04:00 UTC)
        ? <Design20240307 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
