import { Suspense } from 'react';

import { Makeup20261116 } from './_carts/2026/11/16';
import { Makeup20261128 } from './_carts/2026/11/28';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november16, november28 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {november28.contains(date)
        ? <Makeup20261128 date={date} period={november28.toDTO()} />
        : november16.contains(date)
          ? <Makeup20261116 date={date} period={november16.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
