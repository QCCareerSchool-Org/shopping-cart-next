import { Suspense } from 'react';

import { Pet20241213 } from './_carts/2024/12/13';
import { Pet20241226 } from './_carts/2024/12/26';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2024, 11, 19, 8) // 2024-12-19T03:00 (08:00 UTC)
        ? <Pet20241213 date={date} />
        : date >= Date.UTC(2024, 11, 26, 8) && date < Date.UTC(2025, 0, 6, 8) // 2024-12-26T03:00 (08:00 UTC) to 2025-01-06T03:00 (08:00 UTC)
          ? <Pet20241226 date={date} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
