import { Suspense } from 'react';

import { Makeup20260409 } from './_carts/2026/04/09';
import { Makeup20260603 } from './_carts/2026/06/03';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { june03, june13 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {june13.contains(date)
        ? <Makeup20260409 date={date} period={june13.toDTO()} />
        : june03.contains(date)
          ? <Makeup20260603 date={date} period={june03.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
