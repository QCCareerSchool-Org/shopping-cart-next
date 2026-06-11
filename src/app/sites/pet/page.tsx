import { Suspense } from 'react';

import { Pet20260318 } from './_carts/2026/03/18';
import { Pet20260506 } from './_carts/2026/05/06';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { june03, june13 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {june13.contains(date)
        ? <Pet20260318 date={date} period={june13.toDTO()} />
        : june03.contains(date)
          ? <Pet20260506 date={date} period={june03.toDTO()} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
