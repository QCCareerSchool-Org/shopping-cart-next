import { Suspense } from 'react';

import { Makeup20260506 } from './_carts/2026/05/06';
import { Makeup20260722 } from './_carts/2026/07/22';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august06, july22, july8 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august06.contains(date)
        ? <Makeup20260506 date={date} period={august06.toDTO()} />
        : july22.contains(date)
          ? <Makeup20260722 date={date} period={july8.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
