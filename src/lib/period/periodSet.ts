import type { PeriodImpl } from '.';

export class PeriodSet {
  constructor(public readonly ranges: readonly PeriodImpl[]) { }

  public contains = (d: number): boolean => this.ranges.some(r => r.contains(d));
}
