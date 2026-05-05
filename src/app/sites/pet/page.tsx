import { Suspense } from 'react';

import { Pet20260506 } from './_carts/2026/05/06';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { may06 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {may06.contains(date)
        ? <Pet20260506 date={date} period={may06.toDTO()} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
