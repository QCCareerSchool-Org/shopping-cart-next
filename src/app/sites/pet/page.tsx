import { Suspense } from 'react';

import { Pet20260826 } from './_carts/2026/08/26';
import { Pet20260909 } from './_carts/2026/09/09';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august26, september09 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september09.contains(date)
        ? <Pet20260909 date={date} period={september09.toDTO()} />
        : august26.contains(date)
          ? <Pet20260826 date={date} period={august26.toDTO()} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
