import { Suspense } from 'react';

import { Design20260513 } from './_carts/2026/05/13';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { june03, june13 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {june13.contains(date)
        ? <Design20260513 date={date} period={june13.toDTO()} />
        : june03.contains(date)
          ? <Design20260513 date={date} period={june03.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
