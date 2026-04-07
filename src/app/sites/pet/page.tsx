import { Suspense } from 'react';

import { Pet20260409 } from './_carts/2026/04/09';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april9 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april9.contains(date)
        ? <Pet20260409 date={date} period={april9.toDTO()} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
