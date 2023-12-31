'use client';
import { InputHTMLAttributes, useId } from 'react';
import { useFormContext } from 'react-hook-form';

export type CheckBoxType = 'checkbox' | 'radio';
interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: CheckBoxType;
  name: string;
  value?: string;
}

export const CheckBox = ({ type = 'radio', name, value = 'true', ...props }: CheckBoxProps) => {
  const { register } = useFormContext();
  const generatedId = useId();

  return (
    <>
      <label className="check_box mx-3" htmlFor={generatedId}>
        <input
          {...register(name, {
            required: '찬성 반대를 선택해주세요.',
          })}
          value={value}
          type={type}
          id={generatedId}
          name={name}
          {...props}
        />
        <span className="icon"></span>
      </label>
    </>
  );
};
