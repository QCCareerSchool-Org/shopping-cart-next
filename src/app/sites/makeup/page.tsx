import { Suspense } from 'react';

import { Makeup20260422 } from './_carts/2026/04/22';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april22 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april22.contains(date)
        ? <Makeup20260422 date={date} period={april22.toDTO()} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
