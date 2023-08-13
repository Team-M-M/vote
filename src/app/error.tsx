'use client';

import { ErrorPage } from '@components/Common/Error/error';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error, 'error :::');
  }, [error]);

  return (
    // <ErrorPage code={error} />
    <></>
  );
}
