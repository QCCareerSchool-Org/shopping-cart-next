import { Suspense } from 'react';

import { PetStudent20260814 } from './_carts/2026/08/14';
import { PetStudent20260826 } from './_carts/2026/08/26';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august14, august26 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august26.contains(date)
        ? <PetStudent20260826 date={date} period={august26.toDTO()} />
        :
        august14.contains(date)
          ? <PetStudent20260814 date={date} period={august14.toDTO()} />
          : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;
