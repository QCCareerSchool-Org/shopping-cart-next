import { Suspense } from 'react';

import { Pet20240507 } from './_carts/2024/05/07';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 4, 7, 13, 30) && date < Date.UTC(2024, 4, 16, 4) // May 7, 2024 at 09:30 (13:30 UTC) to May 16, 2024 at 00:00 (04:00 UTC)
        ? <Pet20240507 date={date} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
