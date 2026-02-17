import type { Period } from '.';

export interface PeriodSet {
  contains: (d: number) => boolean;
}

export const periodSet = (ranges: readonly Period[]): PeriodSet => {
  return new PeriodSetImpl(ranges);
};

class PeriodSetImpl {
  constructor(public readonly ranges: readonly Period[]) { }

  public contains = (d: number): boolean => this.ranges.some(r => r.contains(d));
}
