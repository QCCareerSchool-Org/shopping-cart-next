import { Suspense } from 'react';

import { PetStudent20261021 } from './_carts/2026/10/21';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <PetStudent20261021 date={date} period={october21.toDTO()} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;
