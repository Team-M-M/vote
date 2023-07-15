import { HTMLAttributes, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

export const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: Props) {
  return (
    <div
      style={{
        flex: 'none',
        width: direction === 'horizontal' ? `${size}px` : undefined,
        height: direction === 'vertical' ? `${size}px` : undefined,
      }}
      {...props}
    />
  );
});
