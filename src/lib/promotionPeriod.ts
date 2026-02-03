export class PromotionPeriod {
  private static readonly formatter = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  constructor(public readonly start: number, public readonly end: number, public readonly lastChance?: number) {
    if (start > end) {
      throw new Error('Range start must be <= end');
    }
    if (lastChance) {
      if (start > lastChance) {
        throw new Error('Range start must be <= last chance');
      }
      if (lastChance > end) {
        throw new Error('Range last chance must be <= end');
      }
    }
  }

  public contains = (d: number): boolean => d >= this.start && d < this.end;

  public toString = (): string => `[${PromotionPeriod.formatter.format(this.start)}, ${PromotionPeriod.formatter.format(this.end)})`;

  public toObject = (): PromotionPeriodObject => ({ start: this.start, end: this.end, lastChance: this.lastChance });
}

export interface PromotionPeriodObject {
  start: number;
  end: number;
  lastChance?: number;
};
