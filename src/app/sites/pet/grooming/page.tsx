import { Suspense } from 'react';

import { Grooming20260923 } from './_carts/2026/09/23';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { september23 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {/* TODO: add grooming fallback */}
      {september23.contains(date)
        ? <Grooming20260923 date={date} period={september23.toDTO()} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
