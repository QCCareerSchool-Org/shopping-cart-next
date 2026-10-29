import { Suspense } from 'react';

import { Grooming20261021 } from './_carts/2026/10/21';
import { Grooming20261104 } from './_carts/2026/11/04';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november04, october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {/* TODO: add grooming fallback */}
      {october21.contains(date)
        ? <Grooming20261021 date={date} period={october21.toDTO()} />
        : november04.contains(date)
          ? <Grooming20261104 date={date} period={november04.toDTO()} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
