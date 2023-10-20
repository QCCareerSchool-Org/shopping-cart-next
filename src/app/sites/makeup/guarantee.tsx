'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const Guarantee: FC = () => {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>guarantee {count}</div>
  );
};
