'use client';
import { ReactElement, Suspense } from 'react';

export const OneProps = ({ elementProps }: { elementProps: any }) => {
  console.log('클라이언트');

  return (
    <div>
      <p>될려나?</p>
      <Suspense fallback={<div>로딩중 ...</div>}>{elementProps}</Suspense>
    </div>
  );
};
