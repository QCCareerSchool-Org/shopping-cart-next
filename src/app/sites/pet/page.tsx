import { Suspense } from 'react';

import { Pet20251022 } from './_carts/2025/10/22';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 9, 22, 4) && date < Date.UTC(2025, 10, 1, 7) // 2025-10-22T00:00 (04:00 UTC) to 2025-11-01T03:00 (07:00 UTC)
        ? <Pet20251022 date={date} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
