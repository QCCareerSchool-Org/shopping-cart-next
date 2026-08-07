import { Suspense } from 'react';

import { Makeup20260506 } from './_carts/2026/05/06';
import { Makeup20260814 } from './_carts/2026/08/14';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august06, august14 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august14.contains(date)
        ? <Makeup20260814 date={date} period={august14.toDTO()} />
        : august06.contains(date)
          ? <Makeup20260506 date={date} period={august06.toDTO()} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;
