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

  public readonly start: number;
  public readonly end: number;

  constructor(start: number, end: number);
  constructor(period: BasePeriod);

  constructor(a: number | BasePeriod, b?: number) {
    if (typeof a === 'number') {
      this.start = a;
      if (typeof b === 'undefined') {
        throw Error('Missing argument');
      }
      this.end = b;
    } else {
      this.start = a.start;
      this.end = a.end;
    }

    if (this.start > this.end) {
      throw Error('Range start must be <= end');
    }
  }

  /**
   * Creates a new range spanning from the earliest start date to the latest end date
   * @param ranges the ranges to conside
   * @returns the new range
   */
  public static span(...ranges: readonly BasePeriod[]): Period {
    if (ranges.length === 0) {
      throw Error('Need at least one range');
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
  public readonly lastChance: number;

  constructor(start: number, lastChance: number, end: number);
  constructor(period: BaseLastChancePeriod);

  constructor(a: number | BaseLastChancePeriod, b?: number, c?: number) {
    if (typeof a === 'number') {
      if (typeof b === 'undefined' || typeof c === 'undefined') {
        throw Error('Missing argument');
      }
      super(a, c);
      this.lastChance = b;
    } else {
      super(a.start, a.end);
      this.lastChance = a.lastChance;
    }

    if (this.lastChance > this.end) {
      throw Error('Last chance date must be <= end date');
    }
    if (this.start > this.lastChance) {
      throw Error('Start date must be <= last chance date');
    }
  }

  public preLastChanceContains = (d: number) => d >= this.start && d < this.lastChance;

  public postLastChanceContains = (d: number) => d >= this.lastChance && d < this.end;

  public toString = (): string => `[${Period.formatter.format(this.start)}, ${Period.formatter.format(this.lastChance)}, ${Period.formatter.format(this.end)})`;

  public toObject = (): BaseLastChancePeriod => ({ start: this.start, end: this.end, lastChance: this.lastChance });
};
