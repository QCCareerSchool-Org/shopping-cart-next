import type { Brand } from '../brand';
import type { Period, PeriodLike } from './period';
import { PeriodImpl } from './period';
import { PeriodError } from './periodError';

export interface LastChancePeriodLike extends PeriodLike {
  readonly lastChance: number;
}

/** what can be passed from server to client components */
export type LastChancePeriodDTO = Brand<LastChancePeriodLike, 'DTO'>;

export interface LastChancePeriod extends Period, LastChancePeriodLike {
  preLastChanceContains: (date: number) => boolean;
  postLastChanceContains: (date: number) => boolean;
  toDTO: () => LastChancePeriodDTO;
};

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

export class LastChancePeriodImpl extends PeriodImpl implements LastChancePeriod {

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

  public toDTO = (): LastChancePeriodDTO => ({ start: this.start, end: this.end, lastChance: this.lastChance } as LastChancePeriodDTO);
};
