import { Suspense } from 'react';

import { Wellness20260304 } from './_carts/2026/03/04';
import { Wellness20260318 } from './_carts/2026/03/18';
import { WellnessFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { mar04, mar04extended, mar18 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const WellnessPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {mar18.contains(date)
        ? <Wellness20260318 date={date} period={mar18.toDTO()} />
        : mar04.contains(date)
          ? <Wellness20260304 date={date} period={mar04.toDTO()} />
          : mar04extended.contains(date)
            ? <Wellness20260304 date={date} period={mar04extended.toDTO()} />
            : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default WellnessPage;
