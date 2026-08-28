import { Suspense } from 'react';

import { Design20260513 } from './_carts/2026/05/13';
import { Design20260826 } from './_carts/2026/08/26';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august26, september09 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september09.contains(date)
        ? <Design20260513 date={date} period={september09.toDTO()} />
        : august26.contains(date)
          ? <Design20260826 date={date} period={august26.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
