import { Suspense } from 'react';

import { PetStudent20250327 } from './_carts/2025/03/27';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2025, 3, 3, 7) // 2025-04–03T03:00 (07:00 UTC)
        ? <PetStudent20250327 date={date} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;
