import { Suspense } from 'react';

import { Wellness20260219 } from './_carts/2026/02/19';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb19 } from '@/lib/period/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb19.contains(date)
        ? <Wellness20260219 date={date} period={feb19.toDTO()} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
