import { Suspense } from 'react';

import { Pet20260613 } from './_carts/2026/06/13';
import { Pet20260806 } from './_carts/2026/08/06';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august06, july22 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august06.contains(date)
        ? <Pet20260806 date={date} period={august06.toDTO()} />
        : july22.contains(date)
          ? <Pet20260613 date={date} period={july22.toDTO()} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
