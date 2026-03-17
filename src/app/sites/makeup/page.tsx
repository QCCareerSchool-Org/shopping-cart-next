import { Suspense } from 'react';

import { Makeup20260304 } from './_carts/2026/03/04';
import { Makeup20260318 } from './_carts/2026/03/18';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { mar04, mar04extended, mar18 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {mar18.contains(date)
        ? <Makeup20260318 date={date} period={mar18.toDTO()} />
        : mar04.contains(date)
          ? <Makeup20260304 date={date} period={mar04.toDTO()} />
          : mar04extended.contains(date)
            ? <Makeup20260304 date={date} period={mar04extended.toDTO()} />
            : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
