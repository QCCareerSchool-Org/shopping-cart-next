import { Suspense } from 'react';

import { Design20260513 } from './_carts/2026/05/13';
import { Design20260806 } from './_carts/2026/08/06';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august06, july22 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august06.contains(date)
        ? <Design20260806 date={date} period={august06.toDTO()} />
        : july22.contains(date)
          ? <Design20260513 date={date} period={july22.toDTO()} />
          : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;
