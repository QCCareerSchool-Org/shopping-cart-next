import { Suspense } from 'react';

import { Pet20250407 } from './_carts/2025/04/07';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 3, 7, 12) && date < Date.UTC(2025, 3, 16, 7) // 2025-04-07T08:00 (12:00 UTC) to 2025-04-16T03:00 (07:00 UTC)
        ? <Pet20250407 date={date} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
