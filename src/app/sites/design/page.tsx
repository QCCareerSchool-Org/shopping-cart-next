import { Suspense } from 'react';

import { Design20260304 } from './_carts/2026/03/04';
import { Design20260318 } from './_carts/2026/03/18';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { mar04, mar04extended, mar18 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {mar18.contains(date)
        ? <Design20260318 date={date} period={mar18.toDTO()} />
        : mar04.contains(date)
          ? <Design20260304 date={date} period={mar04.toDTO()} />
          : mar04extended.contains(date)
            ? <Design20260304 date={date} period={mar04extended.toDTO()} />
            : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
