/** what can be passed from server to client components */
export interface BasePeriod {
  start: number;
  end: number;
};

/** what can be passed from server to client components */
export interface BaseLastChancePeriod extends BasePeriod {
  lastChance: number;
};

export interface IPeriod extends BasePeriod {
  contains: (date: number) => boolean;
  toString: () => string;
  toObject: () => BasePeriod;
}

export interface ILastChancePeriod extends IPeriod, BaseLastChancePeriod {
  preLastChanceContains: (date: number) => boolean;
  postLastChanceContains: (date: number) => boolean;
};

export class Period implements IPeriod {
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
  public static span(...ranges: readonly BasePeriod[]): Period {
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

    return new Period(start, end);
  }

  public contains = (d: number): boolean => d >= this.start && d < this.end;

  public toString = (): string => `[${Period.formatter.format(this.start)}, ${Period.formatter.format(this.end)})`;

  public toObject = (): BasePeriod => ({ start: this.start, end: this.end });
}

export class LastChancePeriod extends Period implements ILastChancePeriod {

  constructor(public readonly start: number, public readonly lastChance: number, public readonly end: number) {
    super(start, end);
    if (lastChance > end) {
      throw new Error('Last chance date must be <= end date');
    }
    if (start > lastChance) {
      throw new Error('Start date must be <= last chance date');
    }
  }

  public preLastChanceContains = (d: number) => d >= this.start && d < this.lastChance;

  public postLastChanceContains = (d: number) => d >= this.lastChance && d < this.end;

  public toString = (): string => `[${Period.formatter.format(this.start)}, ${Period.formatter.format(this.lastChance)}, ${Period.formatter.format(this.end)})`;

  public toObject = (): BaseLastChancePeriod => ({ start: this.start, end: this.end, lastChance: this.lastChance });
};
