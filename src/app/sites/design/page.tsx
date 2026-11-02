import { Suspense } from 'react';

import { Design20261021 } from './_carts/2026/10/21';
import { Design20261104 } from './_carts/2026/11/04';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november04, october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <Design20261021 date={date} period={october21.toDTO()} />
        : november04.contains(date)
          ? <Design20261104 date={date} period={november04.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
