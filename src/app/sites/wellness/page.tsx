import { Suspense } from 'react';

import { Wellness20260121 } from './_carts/2026/01/21';
import { Wellness20260204 } from './_carts/2026/02/04';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb04, jan21 } from '@/lib/promotionPeriods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {jan21.contains(date)
        ? <Wellness20260121 date={date} />
        : feb04.contains(date)
          ? <Wellness20260204 date={date} promotionPeriod={feb04.toObject()} />
          : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
