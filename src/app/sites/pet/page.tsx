import { Suspense } from 'react';

import { Pet20250122 } from './_carts/2025/01/22';
import { Pet20250129 } from './_carts/2025/01/29';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 0, 22, 8) && date < Date.UTC(2025, 0, 29, 8) // 2025-01-22T03:00 (08:00 UTC) to 2025-01-29T03:00 (08:00 UTC)
        ? <Pet20250122 date={date} />
        : date >= Date.UTC(2025, 0, 22, 8) && date < Date.UTC(2025, 1, 1, 8) // 2025-01-29T03:00 (08:00 UTC) to 2025-02-01T03:00 (08:00 UTC)
          ? <Pet20250129 date={date} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
