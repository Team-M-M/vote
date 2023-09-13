import { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;
}

export function Button({ bgColor = 'bg-main', children, ...props }: ButtonProps) {
  return (
    <button className={`${bgColor} w-full rounded-lg text-white font-medium px-4 py-3`} {...props}>
      {children}
    </button>
  );
}
