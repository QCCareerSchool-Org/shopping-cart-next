import { Suspense } from 'react';

import { PetStudent20260519 } from './_carts/2026/05/19';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {may16.contains(date)
        ? <PetStudent20260519 date={date} period={may16.toDTO()} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;
