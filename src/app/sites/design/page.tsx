import { Suspense } from 'react';

import { Design20260806 } from './_carts/2026/08/06';
import { Design20260814 } from './_carts/2026/08/14';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august06, august14 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august14.contains(date)
        ? <Design20260814 date={date} period={august14.toDTO()} />
        : august06.contains(date)
          ? <Design20260806 date={date} period={august06.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
