export type PeriodErrorCode =
  | 'MISSING_ARGUMENT'
  | 'RANGE_INVALID';

export class PeriodError extends Error {
  public readonly code: PeriodErrorCode;
  public readonly details?: Record<string, unknown>;

  constructor(code: PeriodErrorCode, message: string, details?: Record<string, unknown>) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = 'PeriodError';
    this.code = code;
    this.details = details;
  }
};
