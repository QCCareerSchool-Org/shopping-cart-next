import type { Brand } from '../brand';
import type { LastChancePeriod, LastChancePeriodLike } from './lastChancePeriod';
import { LastChancePeriodImpl } from './lastChancePeriod';
import { PeriodImpl } from './period';
import { PeriodError } from './periodError';

interface LastChanceWithExtensionPeriodLike extends LastChancePeriodLike {
  readonly extension: number;
}

/** what can be passed from server to client components */
export type LastChanceWithExtensionPeriodDTO = Brand<LastChanceWithExtensionPeriodLike, 'DTO'>;

export interface LastChanceWithExtensionPeriod extends LastChancePeriod, LastChanceWithExtensionPeriodLike {
  lastChanceContains: (date: number) => boolean;
  extensionContains: (date: number) => boolean;
  toDTO: () => LastChanceWithExtensionPeriodDTO;
};

export function lastChanceWithExtensionPeriod(start: number, lastChance: number, extension: number, end: number): LastChanceWithExtensionPeriod;
export function lastChanceWithExtensionPeriod(dto: LastChanceWithExtensionPeriodLike): LastChanceWithExtensionPeriod;
export function lastChanceWithExtensionPeriod(a: number | LastChanceWithExtensionPeriodLike, b?: number, c?: number, d?: number): LastChanceWithExtensionPeriod {
  if (typeof a === 'number') {
    if (typeof b === 'undefined') {
      throw new PeriodError('MISSING_ARGUMENT', 'Missing lastChance argument', { start: a });
    }
    if (typeof c === 'undefined') {
      throw new PeriodError('MISSING_ARGUMENT', 'Missing extension argument', { start: a, lastChance: b });
    }
    if (typeof d === 'undefined') {
      throw new PeriodError('MISSING_ARGUMENT', 'Missing end argument', { start: a, lastChance: b, extension: c });
    }
    return new LastChanceWithExtensionPeriodImpl(a, b, c, d);
  }

  if (typeof b !== 'undefined' || typeof c !== 'undefined' || typeof d !== 'undefined') {
    throw new PeriodError('INVALID_ARGUMENT', 'Cannot mix object and numeric arguments');
  }

  return new LastChanceWithExtensionPeriodImpl(a.start, a.lastChance, a.extension, a.end);
}

class LastChanceWithExtensionPeriodImpl extends LastChancePeriodImpl implements LastChanceWithExtensionPeriod {

  public constructor(start: number, lastChance: number, public readonly extension: number, end: number) {
    super(start, lastChance, end);
    if (this.extension > this.end) {
      throw new PeriodError('RANGE_INVALID', 'Range extension date must be <= end date', { start: this.start, lastChance: this.lastChance, extension: this.extension, end: this.end });
    }
    if (this.lastChance > this.extension) {
      throw new PeriodError('RANGE_INVALID', 'Range last chance date must be <= extension date', { start: this.start, lastChance: this.lastChance, extension: this.extension, end: this.end });
    }
  }

  public lastChanceContains = (d: number) => d >= this.lastChance && d < this.extension;

  public extensionContains = (d: number) => d >= this.extension && d < this.end;

  public toString = (): string => `[${PeriodImpl.formatter.format(this.start)}, ${PeriodImpl.formatter.format(this.lastChance)}, ${PeriodImpl.formatter.format(this.extension)}, ${PeriodImpl.formatter.format(this.end)})`;

  public toDTO = (): LastChanceWithExtensionPeriodDTO => ({ start: this.start, end: this.end, lastChance: this.lastChance, extension: this.extension } as LastChanceWithExtensionPeriodDTO);
};
