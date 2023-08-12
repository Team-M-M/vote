'use client';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}

export const AgreeBox = ({ value, name }: any) => {
  const { register } = useFormContext();

  return (
    <>
      <label className='check_box' htmlFor={name + value}>
        <input
          {...register(name)}
          value={value}
          type='radio'
          id={name + value}
          name={name}
        />
        <span className="icon"></span>
      </label>
    </>
  );
};
