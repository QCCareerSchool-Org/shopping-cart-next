import { Suspense } from 'react';

import { PetStudent20261021 } from './_carts/2026/10/21';
import { PetStudent20261104 } from './_carts/2026/11/04';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november04, october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <PetStudent20261021 date={date} period={october21.toDTO()} />
        : november04.contains(date)
          ? <PetStudent20261104 date={date} period={november04.toDTO()} />
          : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;
