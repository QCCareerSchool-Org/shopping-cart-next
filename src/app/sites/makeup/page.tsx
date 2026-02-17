import { Suspense } from 'react';

import { Makeup20260219 } from './_carts/2026/02/19';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb19 } from '@/lib/period/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb19.contains(date)
        ? <Makeup20260219 date={date} period={feb19.toDTO()} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
