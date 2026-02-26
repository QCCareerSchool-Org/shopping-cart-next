import { Suspense } from 'react';

import { DesignStudent20260213 } from './_carts/2026/02/13';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb13 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb13.contains(date)
        ? <DesignStudent20260213 date={date} period={feb13.toDTO()} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;
