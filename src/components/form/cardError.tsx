import type { TokenizeError } from 'paysafe-form';
import type { FC, ReactNode } from 'react';

interface Props {
  error: TokenizeError;
}

export const CardError: FC<Props> = ({ error }) => (
  <div className="alert alert-danger mt-3">
    {getMessage(error)}
  </div>
);

const getMessage = (error: TokenizeError): ReactNode => {
  switch (error.code) {
    case '9003':
      return error.displayMessage; // Invalid fields: ${fields}.
    case '9125':
      return error.displayMessage; // Unsupported card brand used: [...].
    default:
      return 'There was an error charging your card.';
  }
};
