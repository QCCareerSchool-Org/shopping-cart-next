import { Suspense } from 'react';

import { Makeup20260923 } from './_carts/2026/09/23';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { september23 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september23.contains(date)
        ? <Makeup20260923 date={date} period={september23.toDTO()} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
