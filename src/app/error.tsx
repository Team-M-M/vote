'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error, 'error :::');
  }, [error]);

  return (
    // <ErrorPage code={error} />
    <button onClick={reset}>error</button>
  );
}
