import { Suspense } from 'react';

import { DesignStudent20260814 } from './_carts/2026/08/14';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august14 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august14.contains(date)
        ? <DesignStudent20260814 date={date} period={august14.toDTO()} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;
