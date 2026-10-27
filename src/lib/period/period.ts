import type { Brand } from '../brand';
import { PeriodError } from './periodError';

export interface PeriodLike {
  readonly start: number;
  readonly end: number;
}

/** what can be passed from server to client components */
export type PeriodDTO = Brand<PeriodLike, 'DTO'>;

export interface Period extends PeriodLike {
  contains: (date: number) => boolean;
  toString: () => string;
  toDTO: () => PeriodDTO;
}

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

export class PeriodImpl implements Period {
  protected static readonly formatter = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  public constructor(public readonly start: number, public readonly end: number) {
    if (this.start > this.end) {
      throw new PeriodError('RANGE_INVALID', 'Range start must be <= end', { start: this.start, end: this.end });
    }
  }

  public contains = (d: number): boolean => d >= this.start && d < this.end;

  public toString = (): string => `[${PeriodImpl.formatter.format(this.start)}, ${PeriodImpl.formatter.format(this.end)})`;

  public toDTO = (): PeriodDTO => ({ start: this.start, end: this.end } as PeriodDTO);
}

export class PeriodSet {
  constructor(public readonly ranges: readonly PeriodImpl[]) { }

  public contains = (d: number): boolean => this.ranges.some(r => r.contains(d));
}
