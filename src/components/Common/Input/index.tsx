'use client';

import { Children, HTMLAttributes, ReactElement, cloneElement, forwardRef, useEffect, useId } from 'react';
import { TextField } from './text-field';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactElement;
  bottomText?: string;
}

export function Input({ label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  const generatedId = useId();
  const id = child.props.id ?? generatedId;
  // const isError: boolean = child.props.error ?? false;

  return (
    <div style={{ width: '100%' }} {...props}>
      <label htmlFor={id} className="inline-block py-[5px] text-base font-medium text-gray-600">
        {label}
      </label>
      {cloneElement(child, { id, ...child.props })}
    </div>
    // ! error 메세지가 있을시
  );
}

Input.TextFiled = forwardRef(TextField);
