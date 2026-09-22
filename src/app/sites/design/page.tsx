import { Suspense } from 'react';

import { Design20260923 } from './_carts/2026/09/23';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { september23 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september23.contains(date)
        ? <Design20260923 date={date} period={september23.toDTO()} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
