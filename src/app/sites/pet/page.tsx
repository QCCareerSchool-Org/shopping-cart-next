import { Suspense } from 'react';

import { Pet20260806 } from './_carts/2026/08/06';
import { Pet20260814 } from './_carts/2026/08/14';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august06, august14 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august14.contains(date)
        ? <Pet20260814 date={date} period={august14.toDTO()} />
        : august06.contains(date)
          ? <Pet20260806 date={date} period={august06.toDTO()} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
