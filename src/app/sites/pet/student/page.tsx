import { Suspense } from 'react';

import { PetStudent20250225 } from './_carts/2025/02/25';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2025, 2, 27, 7) // 2025-03-27T03:00 (07:00 UTC)
        ? <PetStudent20250225 date={date} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;
