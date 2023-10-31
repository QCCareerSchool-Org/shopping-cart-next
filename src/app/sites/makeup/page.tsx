import { Makeup20231023 } from './_default/2023/10/23';
import { MakeupFallback } from './_default/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  if (date >= Date.UTC(2023, 9, 23)) {
    return <Makeup20231023 date={date} />;
  }
  return <MakeupFallback date={date} />;
};

export default MakeupPage;
