import { Suspense } from 'react';

import { Design20260219 } from './_carts/2026/02/19';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb19Extended } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb19Extended.contains(date)
        ? <Design20260219 date={date} period={feb19Extended.toDTO()} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
