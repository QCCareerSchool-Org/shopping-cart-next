import { Suspense } from 'react';

import { Pet20260613 } from './_carts/2026/06/13';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { july22, july8 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {july22.contains(date)
        ? <Pet20260613 date={date} period={july22.toDTO()} />
        : july8.contains(date)
          ? <Pet20260613 date={date} period={july8.toDTO()} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
