export class PromotionPeriod {
  protected static readonly formatter = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  constructor(public readonly start: number, public readonly end: number) {
    if (start > end) {
      throw new Error('Range start must be <= end');
    }
  }

  /**
   * Creates a new range spanning from the earliest start date to the latest end date
   * @param ranges the ranges to conside
   * @returns the new range
   */
  public static span(...ranges: readonly PromotionPeriod[]): PromotionPeriod {
    if (ranges.length === 0) {
      throw new Error('Need at least one range');
    }

    let start = ranges[0].start;
    let end = ranges[0].end;

    for (const r of ranges) {
      if (r.start < start) {
        start = r.start;
      }
      if (r.end > end) {
        end = r.end;
      }
    }

    return new PromotionPeriod(start, end);
  }

  public contains = (d: number): boolean => d >= this.start && d < this.end;

  public toString = (): string => `[${PromotionPeriod.formatter.format(this.start)}, ${PromotionPeriod.formatter.format(this.end)})`;

  public toObject = (): PromotionPeriodObject => ({ start: this.start, end: this.end });
}

export class PromotionPeriodWithLastChance extends PromotionPeriod {

  constructor(readonly start: number, public readonly lastChance: number, readonly end: number) {
    super(start, end);
    if (lastChance > end) {
      throw new Error('Last chance date must be <= end date');
    }
  }

  public PreLastChanceContains = (d: number) => d >= this.start && d < this.lastChance;

  public PostLastChanceContains = (d: number) => d >= this.lastChance && d < this.end;

  public toString = (): string => `[${PromotionPeriod.formatter.format(this.start)}, ${PromotionPeriod.formatter.format(this.lastChance)}, ${PromotionPeriod.formatter.format(this.end)})`;

  public toObject = (): PromotionPeriodWithLastChanceObject => ({ start: this.start, end: this.end, lastChance: this.lastChance });
};

export interface PromotionPeriodObject {
  start: number;
  end: number;
};

export interface PromotionPeriodWithLastChanceObject {
  start: number;
  end: number;
  lastChance: number;
};
