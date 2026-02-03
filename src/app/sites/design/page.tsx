import { Suspense } from 'react';

import { Design20260121 } from './_carts/2026/01/21';
import { Design20260204 } from './_carts/2026/02/04';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb04, jan21 } from '@/lib/promotionPeriods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {jan21.contains(date)
        ? <Design20260121 date={date} />
        : feb04.contains(date)
          ? <Design20260204 date={date} promotionPeriod={feb04.toObject()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
