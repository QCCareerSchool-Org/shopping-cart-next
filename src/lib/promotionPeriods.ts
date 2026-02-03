import { PromotionPeriod } from './promotionPeriod';

export const feb04 = new PromotionPeriod(
  Date.UTC(2026, 1, 4, 8), // 2025-12-26T03:00:00-0500
  Date.UTC(2026, 1, 13, 8), // 2026-02-13T03:00:00-0500
  Date.UTC(2026, 1, 12, 8), // 2026-02-12T03:00:00-0500
);

export const jan21 = new PromotionPeriod(
  Date.UTC(2026, 0, 21, 8), // 2026-01-21T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 4, 8), // 2026-01-31T03:00 (08:00 UTC)
  Date.UTC(2026, 0, 30, 8), // 2026-01-30T03:00 (08:00 UTC)
);
