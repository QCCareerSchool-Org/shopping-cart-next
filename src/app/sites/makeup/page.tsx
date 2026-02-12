import { Suspense } from 'react';

import { Makeup20260121 } from './_carts/2026/01/21';
import { Makeup20260204 } from './_carts/2026/02/04';
import { Makeup20260213 } from './_carts/2026/02/13';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb04, feb13, jan21 } from '@/lib/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb13.contains(date)
        ? <Makeup20260213 date={date} period={feb13.toObject()} />
        : jan21.contains(date)
          ? <Makeup20260121 date={date} />
          : feb04.contains(date)
            ? <Makeup20260204 date={date} promotionPeriod={feb04.toObject()} />
            : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
