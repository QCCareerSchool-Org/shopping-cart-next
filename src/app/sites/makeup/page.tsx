import { Suspense } from 'react';

import { Makeup20260506 } from './_carts/2026/05/06';
import { Makeup20260603 } from './_carts/2026/06/03';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { june03, may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {june03.contains(date)
        ? <Makeup20260603 date={date} period={june03.toDTO()} />
        : may16.contains(date)
          ? <Makeup20260506 date={date} period={may16.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
