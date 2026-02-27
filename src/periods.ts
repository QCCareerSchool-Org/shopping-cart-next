import { lastChancePeriod } from './lib/period';

export const feb28 = lastChancePeriod(
  Date.UTC(2026, 1, 28, 8), // 2026-02-28T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 28, 8), // 2026-02-28T03:00 (08:00 UTC)
  Date.UTC(2026, 2, 1, 8), // 2026-03-01T03:00 (08:00 UTC)
);

export const feb19 = lastChancePeriod(
  Date.UTC(2026, 1, 19, 8), // 2026-02-19T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 27, 8), // 2026-02-27T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 28, 8), // 2026-02-28T03:00 (08:00 UTC)
);

export const feb13 = lastChancePeriod(
  Date.UTC(2026, 1, 13, 8), // 2026-02-13T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 16, 8), // 2026-02-16T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 17, 8), // 2026-02-17T03:00 (08:00 UTC)
);

export const feb04 = lastChancePeriod(
  Date.UTC(2026, 1, 4, 8), // 2025-12-26T03:00:00-0500
  Date.UTC(2026, 1, 12, 8), // 2026-02-12T03:00:00-0500
  Date.UTC(2026, 1, 13, 8), // 2026-02-13T03:00:00-0500
);

export const jan21 = lastChancePeriod(
  Date.UTC(2026, 0, 21, 8), // 2026-01-21T03:00 (08:00 UTC)
  Date.UTC(2026, 0, 30, 8), // 2026-01-30T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 4, 8), // 2026-01-31T03:00 (08:00 UTC)
);
