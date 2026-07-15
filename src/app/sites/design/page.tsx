import { Suspense } from 'react';

import { Design20260513 } from './_carts/2026/05/13';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { july22, july8 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {july22.contains(date)
        ? <Design20260513 date={date} period={july22.toDTO()} />
        : july8.contains(date)
          ? <Design20260513 date={date} period={july8.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
