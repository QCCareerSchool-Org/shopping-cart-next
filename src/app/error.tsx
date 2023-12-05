'use client'; // Error components must be Client Components

import type { FC } from 'react';
import { useEffect } from 'react';

import TrackJs from '@/lib/trackJsIsomorphic';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorBoundary: FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    TrackJs.track(error);
    console.error(error);
  }, [ error ]);

  const handleClick = (): void => {
    reset();
  };

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={handleClick}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
