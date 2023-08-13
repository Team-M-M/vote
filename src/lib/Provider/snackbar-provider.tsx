'use client';

import { ToastContainer } from 'react-toastify';

interface SnackbarProvider {
  children: React.ReactNode;
}

export default function SnackbarProvider(/* { children }: SnackbarProvider */) {
  return (
    <>
      {/* {children} */}
      <ToastContainer
        position="top-center"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      />
    </>
  );
}
