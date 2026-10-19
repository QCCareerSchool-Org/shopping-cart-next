import { Suspense } from 'react';

import { Makeup20261021 } from './_carts/2026/10/21';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <Makeup20261021 date={date} period={october21.toDTO()} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
