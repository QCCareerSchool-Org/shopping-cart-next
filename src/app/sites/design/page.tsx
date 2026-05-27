import { Suspense } from 'react';

import { Design20260506 } from './_carts/2026/05/06';
import { Design20260513 } from './_carts/2026/05/13';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { may06, may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {may16.contains(date)
        ? <Design20260506 date={date} period={may16.toDTO()} />
        : may06.contains(date)
          ? <Design20260506 date={date} period={may06.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
