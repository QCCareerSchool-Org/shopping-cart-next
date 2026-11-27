import { Suspense } from 'react';

import { Design20261116 } from './_carts/2026/11/16';
import { Design20261128 } from './_carts/2026/11/28';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november16, november28 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {november28.contains(date)
        ? <Design20261128 date={date} period={november28.toDTO()} />
        : november16.contains(date)
          ? <Design20261116 date={date} period={november16.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
