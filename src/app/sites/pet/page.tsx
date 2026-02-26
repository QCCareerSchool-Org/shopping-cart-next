import { Suspense } from 'react';

import { Pet20260219 } from './_carts/2026/02/19';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb19 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb19.contains(date)
        ? <Pet20260219 date={date} period={feb19.toDTO()} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
