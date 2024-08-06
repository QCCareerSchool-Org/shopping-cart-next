import { Suspense } from 'react';

import { Pet20240807 } from './_carts/2024/08/07';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 7, 7, 13, 30) && date < Date.UTC(2024, 7, 17, 4) // August 7, 2024 at 09:30 (13:30 UTC) to August 17, 2024 at 00:00 (04:00 UTC)
        ? <Pet20240807 date={date} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
