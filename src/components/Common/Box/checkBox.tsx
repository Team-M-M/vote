'use client';
import { InputHTMLAttributes, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}

export const CheckBox = ({ type, name }: any) => {
  const { register, handleSubmit } = useFormContext();

  return (
    <>
      <label className="check_box" htmlFor={name}>
        <input {...register('checked')} value={`${name}`} type={type} id={name} />
        <span className="icon"></span>
      </label>
    </>
  );
};
