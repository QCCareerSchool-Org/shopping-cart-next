import { Suspense } from 'react';

import { Makeup20260506 } from './_carts/2026/05/06';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { june13, june27 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {june27.contains(date)
        ? <Makeup20260506 date={date} period={june27.toDTO()} />
        : june13.contains(date)
          ? <Makeup20260506 date={date} period={june13.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
