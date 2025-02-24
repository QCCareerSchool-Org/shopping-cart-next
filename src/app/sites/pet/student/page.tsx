import { Suspense } from 'react';

import { PetStudent20250225 } from './_carts/2025/02/25';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 25, 8) && date < Date.UTC(2025, 2, 1, 8) // 2025-02-25T03:00 (08:00 UTC) to 2025-03-01T03:00 (08:00 UTC)
        ? <PetStudent20250225 date={date} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;
