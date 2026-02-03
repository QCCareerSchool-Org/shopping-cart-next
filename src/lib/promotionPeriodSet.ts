import type { PromotionPeriod } from './promotionPeriod';

export class PromotionPeriodSet {
  constructor(public readonly ranges: readonly PromotionPeriod[]) { }

  public contains = (d: number): boolean => this.ranges.some(r => r.contains(d));
}
