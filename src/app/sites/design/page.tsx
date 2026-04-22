import { Suspense } from 'react';

import { Design20260423 } from './_carts/2026/04/23';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april23 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april23.contains(date)
        ? <Design20260423 date={date} period={april23.toDTO()} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
