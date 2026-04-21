import { Suspense } from 'react';

import { Design20260422 } from './_carts/2026/04/22';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april22 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april22.contains(date)
        ? <Design20260422 date={date} period={april22.toDTO()} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
