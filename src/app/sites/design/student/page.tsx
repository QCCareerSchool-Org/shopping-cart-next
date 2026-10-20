import { Suspense } from 'react';

import { DesignStudent20261021 } from './_carts/2026/11/21';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <DesignStudent20261021 date={date} period={october21.toDTO()} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;
