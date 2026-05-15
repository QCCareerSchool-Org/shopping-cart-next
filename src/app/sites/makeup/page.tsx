import { Suspense } from 'react';

import { Makeup20260506 } from './_carts/2026/05/06';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { may06, may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {may16.contains(date)
        ? <Makeup20260506 date={date} period={may16.toDTO()} />
        : may06.contains(date)
          ? <Makeup20260506 date={date} period={may06.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
