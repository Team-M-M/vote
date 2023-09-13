'use client';

import { RegisterType } from 'lib/validation/account.type';
import { ForwardedRef, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputMode = 'search' | 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | undefined;

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  register: () => UseFormRegisterReturn<RegisterType>;
  inputMode?: InputMode;
  // error?: boolean;
}

export function TextField(
  { inputMode = 'text', register, ...props }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <input className="accessInput" inputMode={inputMode} {...register()} {...props} />;
}
