import { Suspense } from 'react';

import { Design20260513 } from './_carts/2026/05/13';
import { Design20260627 } from './_carts/2026/06/27';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { july10, june27 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {july10.contains(date)
        ? <Design20260513 date={date} period={july10.toDTO()} />
        : june27.contains(date)
          ? <Design20260627 date={date} period={june27.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
