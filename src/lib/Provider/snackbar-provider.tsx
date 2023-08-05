'use client'

import { ToastContainer } from "react-toastify";

interface SnackbarProvider {
  children: React.ReactNode;
}

export default function SnackbarProvider({ children }: SnackbarProvider) {
  return (
    <>
      {children}
      <ToastContainer
        className={'flex-col'}
      />
    </>
  );
}