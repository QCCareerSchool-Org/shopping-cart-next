import { Suspense } from 'react';

import { Design20260506 } from './_carts/2026/05/06';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { june03, may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {june03.contains(date)
        ? <Design20260506 date={date} period={june03.toDTO()} />
        : may16.contains(date)
          ? <Design20260506 date={date} period={may16.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
