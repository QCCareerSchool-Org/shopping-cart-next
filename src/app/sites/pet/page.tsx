import { Suspense } from 'react';

import { Pet20250206 } from './_carts/2025/02/06';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 6, 8) && date < Date.UTC(2025, 1, 16, 8) // 2025-02-06T03:00 (08:00 UTC) to 2025-02-16T03:00 (08:00 UTC)
        ? <Pet20250206 date={date} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
