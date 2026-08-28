import { Suspense } from 'react';

import { DesignStudent20260826 } from './_carts/2026/08/26';
import { DesignStudent20260909 } from './_carts/2026/09/09';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august26, september09 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september09.contains(date)
        ? <DesignStudent20260909 date={date} period={september09.toDTO()} />
        :
        august26.contains(date)
          ? <DesignStudent20260826 date={date} period={august26.toDTO()} />
          : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;
