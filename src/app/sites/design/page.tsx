import { Suspense } from 'react';

import { Design20261007 } from './_carts/2026/10/07';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { october07 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october07.contains(date)
        ? <Design20261007 date={date} period={october07.toDTO()} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
