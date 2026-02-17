import { PeriodError } from './periodError';

interface PeriodLike {
  readonly start: number;
  readonly end: number;
}

interface LastChancePeriodLike extends PeriodLike {
  readonly lastChance: number;
}

type DTO<T> = T & {
  /** to ensure we don't accidentally pass the class as a prop */
  readonly __type: 'DTO';
};

/** what can be passed from server to client components */
export type PeriodDTO = DTO<PeriodLike>;

/** what can be passed from server to client components */
export type LastChancePeriodDTO = DTO<LastChancePeriodLike>;

export interface Period extends PeriodLike {
  contains: (date: number) => boolean;
  toString: () => string;
  toDTO: () => PeriodDTO;
}

export interface LastChancePeriod extends Period, LastChancePeriodLike {
  preLastChanceContains: (date: number) => boolean;
  postLastChanceContains: (date: number) => boolean;
  toDTO: () => LastChancePeriodDTO;
};

export function period(start: number, end: number): Period;
export function period(p: PeriodLike): Period;
export function period(a: number | PeriodLike, b?: number): Period {
  if (typeof a === 'number') {
    if (typeof b === 'undefined') {
      throw new PeriodError('MISSING_ARGUMENT', 'Missing end argument', { start: a });
    }
    return new PeriodImpl(a, b);
  }
  if (typeof b !== 'undefined') {
    throw new PeriodError('INVALID_ARGUMENT', 'Cannot mix object and numeric arguments');
  }
  return new PeriodImpl(a.start, a.end);
}

export function lastChancePeriod(start: number, lastChance: number, end: number): LastChancePeriod;
export function lastChancePeriod(dto: LastChancePeriodLike): LastChancePeriod;
export function lastChancePeriod(a: number | LastChancePeriodLike, b?: number, c?: number): LastChancePeriod {
  if (typeof a === 'number') {
    if (typeof b === 'undefined') {
      throw new PeriodError('MISSING_ARGUMENT', 'Missing lastChance argument', { start: a });
    }
    if (typeof c === 'undefined') {
      throw new PeriodError('MISSING_ARGUMENT', 'Missing end argument', { start: a, lastChance: b });
    }
    return new LastChancePeriodImpl(a, b, c);
  }

  if (typeof b !== 'undefined' || typeof c !== 'undefined') {
    throw new PeriodError('INVALID_ARGUMENT', 'Cannot mix object and numeric arguments');
  }

  return new LastChancePeriodImpl(a.start, a.lastChance, a.end);
}

/**
 * Creates a new range spanning from the earliest start date to the latest end date
 * @param ranges the ranges to conside
 * @returns the new range
 */
export const span = (...ranges: readonly PeriodLike[]): Period => {
  if (ranges.length === 0) {
    throw new PeriodError('MISSING_ARGUMENT', 'Need at least one period');
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

  return new PeriodImpl(start, end);
};

class PeriodImpl implements Period {
  protected static readonly formatter = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  public constructor(public readonly start: number, public readonly end: number) {
    if (this.start > this.end) {
      throw new PeriodError('RANGE_INVALID', 'Range start must be <= end', { start: this.start, end: this.end });
    }
  }

  public contains = (d: number): boolean => d >= this.start && d < this.end;

  public toString = (): string => `[${PeriodImpl.formatter.format(this.start)}, ${PeriodImpl.formatter.format(this.end)})`;

  public toDTO = (): PeriodDTO => ({ __type: 'DTO', start: this.start, end: this.end });
}

class LastChancePeriodImpl extends PeriodImpl implements LastChancePeriod {

  public constructor(start: number, public readonly lastChance: number, end: number) {
    super(start, end);
    if (this.lastChance > this.end) {
      throw new PeriodError('RANGE_INVALID', 'Range last chance date must be <= end date', { start: this.start, lastChance: this.lastChance, end: this.end });
    }
    if (this.start > this.lastChance) {
      throw new PeriodError('RANGE_INVALID', 'Range start date must be <= last chance date', { start: this.start, lastChance: this.lastChance, end: this.end });
    }
  }

  public preLastChanceContains = (d: number) => d >= this.start && d < this.lastChance;

  public postLastChanceContains = (d: number) => d >= this.lastChance && d < this.end;

  public toString = (): string => `[${PeriodImpl.formatter.format(this.start)}, ${PeriodImpl.formatter.format(this.lastChance)}, ${PeriodImpl.formatter.format(this.end)})`;

  public toDTO = (): LastChancePeriodDTO => ({ __type: 'DTO', start: this.start, end: this.end, lastChance: this.lastChance });
};

export class PeriodSet {
  constructor(public readonly ranges: readonly PeriodImpl[]) { }

  public contains = (d: number): boolean => this.ranges.some(r => r.contains(d));
}
