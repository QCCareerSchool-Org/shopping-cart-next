import { Suspense } from 'react';

import { Makeup20260304 } from './_carts/2026/03/04';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { mar04, mar04extended } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {mar04.contains(date)
        ? <Makeup20260304 date={date} period={mar04.toDTO()} />
        : mar04extended.contains(date)
          ? <Makeup20260304 date={date} period={mar04extended.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
