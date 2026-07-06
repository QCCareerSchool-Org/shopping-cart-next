import { Suspense } from 'react';

import { Makeup20260627 } from './_carts/2026/06/27';
import { Makeup20260708 } from './_carts/2026/07/08';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { july8, june27 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {july8.contains(date)
        ? <Makeup20260708 date={date} period={july8.toDTO()} />
        : june27.contains(date)
          ? <Makeup20260627 date={date} period={june27.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
