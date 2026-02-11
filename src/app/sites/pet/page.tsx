import { Suspense } from 'react';

import { Pet20260121 } from './_carts/2026/01/21';
import { Pet20260204 } from './_carts/2026/02/04';
import { Pet20260213 } from './_carts/2026/02/13';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb04, feb13, jan21 } from '@/lib/promotionPeriods';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb13.contains(date)
        ? <Pet20260213 date={date} promotionPeriod={feb13.toObject()} />
        : jan21.contains(date)
          ? <Pet20260121 date={date} />
          : feb04.contains(date)
            ? <Pet20260204 date={date} promotionPeriod={feb04.toObject()} />
            : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;
