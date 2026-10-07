import { Suspense } from 'react';

import { Grooming20261007 } from './_carts/2026/10/07';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { october07 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {/* TODO: add grooming fallback */}
      {october07.contains(date)
        ? <Grooming20261007 date={date} period={october07.toDTO()} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
