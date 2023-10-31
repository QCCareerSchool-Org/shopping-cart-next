import type { ReactNode } from 'react';

import type { School } from './school';

export type Promo = {
  code: string;
  schools: School[];
  student: 'ALLOWED' | 'DENIED' | 'ONLY';
  description: ReactNode;
  altText: string;
  /** won't show before this date */
  startDate?: number;
  /** won't show after this date */
  endDate?: number;
  /** the expiry date to display to visitors (if undefined, we'll use endDate, or end of current month if endDate is undefined) */
  displayEndDate?: number;
};
